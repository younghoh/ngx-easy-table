import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {FiltersService} from "../../services/filters-service";

@Component({
  selector: 'header',
  templateUrl: 'app///components/header/header.html'
})

export class Header {
  constructor(public filtersService:FiltersService){}
  @Input() key;
  @Output() update = new EventEmitter();
}
