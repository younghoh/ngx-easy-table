import { Injectable, OnChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ResourceService } from './resource-service';
import { ConfigService } from './config-service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaginationService implements OnChanges{
  public pageNumber: number;
  public range: number;
  public pageNumbers: Array<any>;
  public ranges: number[];
  public numberOfItems: number;

  updateRangeSource = new Subject<any>();
  updateRange$ = this.updateRangeSource.asObservable();

  constructor(public resource: ResourceService,
              public config: ConfigService) {
    this.ranges = [5, 10, 25, 50, 100];
    this.pageNumber = 1;
    this.range = this.config.rows;
    this.pageNumbers = [];
    this.resource.getPipedData().subscribe(data => {
      this.numberOfItems = data;
      this.updateNumberPerPage();
    });
  }

  ngOnChanges() {
    this.updatePagination();
  }

  public emitPaginationProperties(): void {
    this.updateRangeSource.next({ range: this.range, page: this.pageNumber });
  }

  public updateNumberPerPage(): void {
    this.pageNumbers = Array(this.paginationItemsCount)
      .fill(this.paginationItemsCount, 0)
      .map((_, i) => i + 1);
  }

  public updatePagination(): void {
    console.log('updatePagination');
    this.updateNumberPerPage();
    this.emitPaginationProperties();
  }

  public isActiveRange(currentRange: Number): boolean {
    return currentRange === this.range;
  }

  public isActivePage(currentPage: Number): boolean {
    return currentPage === this.pageNumber;
  }

  public nextPage(event): void {
    event.preventDefault();
    if (!this.isLastPage()) {
      this.pageNumber++;
      this.updatePagination();
    }
  }

  public previousPage(event): void {
    event.preventDefault();
    if (!this.isFirstPage()) {
      this.pageNumber--;
      this.updatePagination();
    }
  }

  public isLastPage(): boolean {
    return this.pageNumber === this.pageNumbers.length;
  }

  public isFirstPage(): boolean {
    return this.pageNumber === 1;
  }

  changeRange(event, number): void {
    event.preventDefault();
    this.range = number;
    this.pageNumber = 1;
    this.updatePagination();
  }

  changePage(event, numberOfPage): void {
    event.preventDefault();
    const prevPage = this.pageNumber;
    this.pageNumber = numberOfPage;
    this.updatePagination();
  }

  get paginationItemsCount(): number {
    return Math.ceil(this.numberOfItems / this.range);
  }
}
