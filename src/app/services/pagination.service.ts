import { Injectable, OnChanges, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ResourceService } from './resource-service';
import { ConfigService } from './config-service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaginationService {
  public pageNumbers: Array<any>;
  public ranges: number[];
  public count: number;
  public offset: number;
  public limit: number;

  updateRangeSource = new Subject<any>();
  updateRange$ = this.updateRangeSource.asObservable();

  constructor(public resource: ResourceService,
              public config: ConfigService) {
    this.ranges = [5, 10, 25, 50, 100];
    this.offset = 1;
    this.limit = ConfigService.config.rows;
    this.pageNumbers = [];
    if (!ConfigService.config.serverPagination) {
      this.resource.getPipedData().subscribe(count => {
        this.count = count;
        this.updateNumberPerPage();
      });
    }
  }

  public emitPaginationProperties(): void {
    this.updateRangeSource.next({ limit: this.limit, offset: this.offset });
  }

  public updateNumberPerPage(): void {
    this.pageNumbers = Array(this.paginationItemsCount)
      .fill(this.paginationItemsCount, 0)
      .map((_, i) => i + 1);
  }

  public updatePagination(): void {
    if (!ConfigService.config.serverPagination) {
      this.updateNumberPerPage();
    }
    this.emitPaginationProperties();
  }

  public isActiveLimit(currentLimit: Number): boolean {
    return currentLimit === this.limit;
  }

  public isActivePage(offset: Number): boolean {
    return offset === this.offset;
  }

  public nextPage(event): void {
    event.preventDefault();
    if (!ConfigService.config.serverPagination) {
      if (!this.isLastPage()) {
        this.offset++;
        this.updatePagination();
      }
    }
  }

  public previousPage(event): void {
    event.preventDefault();
    if (!ConfigService.config.serverPagination) {
      if (!this.isFirstPage()) {
        this.offset--;
        this.updatePagination();
      }
    }
  }

  public isLastPage(): boolean {
    return this.offset === this.pageNumbers.length;
  }

  public isFirstPage(): boolean {
    return this.offset === 1;
  }

  changeLimit(event, limit): void {
    event.preventDefault();
    this.limit = limit;
    this.offset = 1;
    this.updatePagination();
  }

  changeOffset(event, offset): void {
    event.preventDefault();
    this.offset = offset;
    this.updatePagination();
  }

  get paginationItemsCount(): number {
    return Math.ceil(this.count / this.limit);
  }
}
