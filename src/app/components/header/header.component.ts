import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FiltersService} from "../../services/filters-service";

@Component({
  selector: 'table-header',
  template: `
  <label for="search_{{ key }}">
    <input type="text"
           id="search_{{ key }}"
           aria-label="Search"
           placeholder="Search for {{ key }}"
           class="form-input"
           #input
           (input)="update.emit({value: input.value, key: key})"
    >
  </label>`
})

export class Header implements OnInit {
  constructor(public filtersService:FiltersService) {
  }

  @Input() key;
  @Output() update = new EventEmitter();

  ngOnInit() {
    this.update.emit({});
  }
}
