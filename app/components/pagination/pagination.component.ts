import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {ResourceService} from "../../services/resource-service";
import {ConfigService} from "../../services/config-service";

@Component({
  selector: 'pagination',
  template: `
<ul class="ng2-table__pagination">
    <li [class.disabled]="isFirstPage()">
        <a href="#" (click)="previousPage($event)">«</a>
    </li>

    <li *ngFor="#page of pageNumbers" [class.active]="isActivePage(page)">
        <a href="#" (click)="changePage($event, page)">{{page}}</a>
    </li>

    <li [class.disabled]="isLastPage()">
        <a href="#" (click)="nextPage($event)">»</a>
    </li>
</ul>

<ul class="ng2-table__items-per-page">
    <li [class.active]="isActiveRange(5)"><a href="#" (click)="changeRange($event, 5)">5</a></li>
    <li [class.active]="isActiveRange(10)"><a href="#" (click)="changeRange($event, 10)">10</a></li>
    <li [class.active]="isActiveRange(25)"><a href="#" (click)="changeRange($event, 25)">25</a></li>
    <li [class.active]="isActiveRange(50)"><a href="#" (click)="changeRange($event, 50)">50</a></li>
    <li [class.active]="isActiveRange(100)"><a href="#" (click)="changeRange($event, 100)">100</a></li>
</ul>
`,
  styles: [`
.ng2-table__pagination, .ng2-table__items-per-page {
  display: inline-block;
  list-style-type: none;
  margin: 8px 0;
  padding: 0; }
  .ng2-table__pagination li, .ng2-table__items-per-page li {
    border: 1px solid #f0f0f0;
    float: left;
    margin: 0;
    padding: 6px; }
    .ng2-table__pagination li a, .ng2-table__items-per-page li a {
      color: inherit;
      text-decoration: none; }
  .ng2-table__pagination .active, .ng2-table__items-per-page .active {
    background: #2196f3;
    border-color: #0c7cd5;
    color: #fff; }

.ng2-table__items-per-page {
  float: right; }


`]
})

export class Pagination {

  private pageNumber:number;
  private range:number;
  public pageNumbers:Array<any>;

  constructor(public resource:ResourceService,
              public config:ConfigService) {
    this.pageNumber = 1;
    this.range = this.config.rows || 10;
    this.pageNumbers = [];
    ResourceService.getPipedData().subscribe(data => {
      this.numberOfItems = data;
      this.updateNumberPerPage();
    });
  }

  public emitPaginationProperties():void {
    this.updateRange.emit({range: this.range, page: this.pageNumber});
  }

  public updateNumberPerPage():void {
    // issue #5
    // if (this.range > this.numberOfItems && this.numberOfItems > 0) {
    //   this.range = this.numberOfItems;
    // }
    let numberPerPage = Math.ceil(this.numberOfItems / this.range);
    this.pageNumbers = Array(numberPerPage).fill(numberPerPage, 0).map((_, i) => i + 1);
  }

  public updatePagination():void {
    this.updateNumberPerPage();
    this.emitPaginationProperties();
  }

  public isActiveRange(currentRange:Number):boolean {
    return currentRange === this.range;
  }

  public isActivePage(currentPage:Number):boolean {
    return currentPage === this.pageNumber;
  }

  public nextPage(event):void {
    event.preventDefault();
    if (!this.isLastPage()) {
      this.pageNumber++;
    }
  }

  public previousPage(event):void {
    event.preventDefault();
    if (!this.isFirstPage()) {
      this.pageNumber--;
    }
  }

  public isLastPage():boolean {
    return this.pageNumber === this.pageNumbers.length;
  }

  public isFirstPage():boolean {
    return this.pageNumber === 1;
  }

  @Input() numberOfItems:number;
  @Output() updateRange = new EventEmitter();

  ngOnChanges() {
    this.updatePagination();
  }

  changeRange(event, number):void {
    event.preventDefault();
    this.range = number;
    this.pageNumber = 1;
    this.updatePagination();
  }

  changePage(event, numberOfPage):void {
    event.preventDefault();
    this.pageNumber = numberOfPage;
    this.updatePagination();
  }
}
