import {Component, OnInit, Input} from 'angular2/core';
import 'rxjs/add/operator/map';
import {HTTP_PROVIDERS} from "angular2/http";

import {SearchPipe} from "./pipes/header-pipe";
import {PaginationPipe} from "./pipes/pagination-pipe";
import {GlobalSearchPipe} from "./pipes/global-search-pipe";

import {FiltersService} from "./services/filters-service";
import {ConfigService} from "./services/config-service";
import {ResourceService} from "./services/resource-service";
import {HttpService} from "./services/http-service";

import {GlobalSearch} from "./components/global-search/global-search.component";
import {CsvExport} from "./components/dropdown/csv-export.component";
import {Header} from "./components/header/header.component";
import {Pagination} from "./components/pagination/pagination.component";

@Component({
  selector: 'ng2-table',
  bindings: [HttpService, FiltersService, ResourceService, ConfigService, HTTP_PROVIDERS],
  directives: [Header, Pagination, GlobalSearch, CsvExport],
  pipes: [SearchPipe, PaginationPipe, GlobalSearchPipe],
  template: `
  <global-search
        *ngIf="config.globalSearchEnabled"
        (globalUpdate)="globalSearchTerm = $event">
</global-search>
<csv-export *ngIf="config.exportEnabled"></csv-export>

<table class="ng2-table__table--striped">
    <thead>
    <tr>
        <th [style.display]="config.orderEnabled?'':'none' "
            *ngFor="let key of keys"
            (click)="orderBy(key)">
            {{ key }}
            <span *ngIf="resource.order[key]==='asc' " class="ng2-table__sort-indicator arrow-down"></span>
            <span *ngIf="resource.order[key]==='desc' " class="ng2-table__sort-indicator arrow-up"></span>
        </th>
        <th [style.display]="!config.orderEnabled?'':'none' "
            *ngFor="let key of keys">
            {{ key }}
        </th>
        <th *ngIf="config.editEnabled">Actions</th>
    </tr>
    <tr *ngIf="config.searchEnabled">
        <th *ngFor="let key of keys">
            <table-header (update)="term = $event" [key]="key"></table-header>
        </th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let row of data | search : term | global : globalSearchTerm | pagination : range">
        <td *ngFor="let key of keys">
            {{ row[key] }}
        </td>
        <td *ngIf="config.editEnabled">
            <button class="ng2-table__button">Edit</button>
        </td>
    </tr>
    </tbody>
    <tfoot *ngIf="config.footerEnabled">
    <tr>
        <td *ngFor="let key of keys"></td>
        <td></td>
    </tr>
    </tfoot>
</table>

<pagination *ngIf="config.paginationEnabled" 
            [numberOfItems]="numberOfItems" 
            (updateRange)="range = $event"></pagination>
  `,
  styles: [`
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,700);
.ng2-table__input {
  border: 0;
  font-size: .9em;
  margin: 0;
  padding: 2px;
  width: 100%; }

.ng2-table__table, .ng2-table__table--striped {
  border-spacing: 0;
  width: 100%; }
  .ng2-table__table td,
  .ng2-table__table th, .ng2-table__table--striped td,
  .ng2-table__table--striped th {
    border-color: #f0f0f0;
    border-style: solid;
    border-width: 1px 1px 0 0;
    margin: 0;
    padding: 2px; }
  .ng2-table__table th, .ng2-table__table--striped th {
    cursor: pointer;
    font-weight: 700;
    text-align: left; }
  .ng2-table__table tr:last-child th, .ng2-table__table--striped tr:last-child th {
    border-bottom-color: #cacaca; }

.ng2-table__table--striped tbody tr:nth-child(odd) {
  background: #f0f0f0; }

.ng2-table__sort-indicator {
  float: right;
  font-size: .5em !important;
  padding-top: 4px; }

.ng2-table-demo {
  font-family: 'Source Sans Pro', 'Helvetica', sans-serif; }
  .arrow-up {
	width: 0; 
	height: 0; 
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-bottom: 5px solid black; }
  .arrow-down {
	width: 0; 
	height: 0; 
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 5px solid black; }
`]
})

export class AppComponent implements OnInit {
  @Input() configuration:ConfigService;

  constructor(public filtersService:FiltersService,
              public config:ConfigService,
              public resource:ResourceService,
              public httpService:HttpService) {
  }

  ngOnInit() {
    if (this.configuration) {
      this.config = this.configuration;
    }
    this.numberOfItems = 0;
    this.itemsObservables = this.httpService.getData(this.config.resourceUrl);
    this.itemsObservables.subscribe(res => {
      this.data = res;
      this.numberOfItems = res.length;
      this.keys = Object.keys(this.data[0]);
      this.resource.keys = this.keys;
    });
  }

  public data:Array<any>;
  public keys:Array<any>;
  public numberOfItems:number;
  public itemsObservables;

  public orderBy(key:string) {
    this.data = this.resource.sortBy(key);
  };
}
