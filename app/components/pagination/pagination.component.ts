import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {FiltersService} from "../../services/filters-service";

@Component({
  selector: 'pagination',
  templateUrl: 'app///components/pagination/pagination.html',
  styleUrls: ['app/components/pagination/pagination.css']
})

export class Pagination {

  private pageNumber:Number;
  private range:Number;
  public pageNumbers: Array<>;

  constructor() {
    this.pageNumber = 1;
    this.pageNumbers = [];
  }

  public emitPaginationProperties():void {
    this.updateRange.emit({ range: this.range, page: this.pageNumber });
  }

  public updatePagination():void {
    let numberPerPage = this.numberOfItems.length / this.range;
    this.pageNumbers = Array(numberPerPage).fill().map((_, i) => i + 1);
  }
  @Input() numberOfItems: Number;
  @Output() updateRange = new EventEmitter();
  changeRange(number){
    this.range = number;
    this.updatePagination();
    this.emitPaginationProperties();
  }

  changePage(numberOfPage){
    this.pageNumber = numberOfPage;
    this.updatePagination();
    this.emitPaginationProperties();
  }
  
}
