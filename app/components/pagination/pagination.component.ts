import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {FiltersService} from "../../services/filters-service";

@Component({
  selector: 'pagination',
  templateUrl: 'app///components/pagination/pagination.html'
})

export class Pagination {
  constructor() { }
  @Output() updateRange = new EventEmitter();
  changeRange(number){
    this.updateRange.emit({ range: number })
    
  }

  changePage(numberOfPage){
    console.log("change page", numberOfPage);
  }
  
}
