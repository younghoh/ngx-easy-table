import {
  Component, OnInit, Input, ChangeDetectorRef, AfterViewInit, Output, EventEmitter,
  ContentChild, TemplateRef, OnChanges, SimpleChanges, SimpleChange
} from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from './services/http-service';
import { FiltersService } from './services/filters-service';
import { ResourceService } from './services/resource-service';
import { ConfigService } from './services/config-service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng2-table',
  providers: [HttpService, FiltersService, ResourceService, ConfigService],
  templateUrl: './app.component.html',
  styleUrls: [
    './../assets/spectre.css',
    './../assets/icons.css',
    './app.component.css',
  ],
  encapsulation: ViewEncapsulation.Native
})

export class TableComponent implements OnInit, OnChanges, AfterViewInit {
  public data: Array<any>;
  public filteredData: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public selectedRow: number;
  public selectedCol: number;
  public selectedCell: number;

  @Input() configuration: ConfigService;
  @Input() filters: any;
  @Output() event = new EventEmitter();
  @ContentChild(TemplateRef) public tpl: TemplateRef<any>;

  constructor(public filtersService: FiltersService,
              public config: ConfigService,
              public resource: ResourceService,
              public httpService: HttpService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (this.configuration) {
      this.config = this.configuration;
    }
    this.numberOfItems = 0;
    if (this.config.data && this.config.data.length > 0) {
      this.data = this.config.data;
      this.filteredData = [...this.data];
      this.numberOfItems = this.config.data.length;
      this.resource.keys = Object.keys(this.data[0]);
    } else {
      this.httpService
        .getData(this.config.resourceUrl, this.config.httpHeaders)
        .subscribe(res => {
          this.data = res;
          this.filteredData = [...this.data];
          this.numberOfItems = res.length;
          this.resource.keys = Object.keys(this.data[0]);
        });
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    const filters: SimpleChange = changes.filters;
    this.data = this.filtersService.applyCustomFilters(filters.currentValue, this.filteredData);
  }

  orderBy(key: string) {
    if (this.config.orderEnabled) {
      this.data = this.resource.sortBy(key);
    }
  }

  clickedCell($event: object, row: object, key: string | number | boolean, colIndex: number, rowIndex: number) {
    if (this.config.selectRow) {
      this.selectedRow = rowIndex;
    }
    if (this.config.selectCol) {
      this.selectedCol = colIndex;
    }
    if (this.config.selectCell) {
      this.selectedRow = rowIndex;
      this.selectedCol = colIndex;
    }
    if (this.config.clickEvent) {
      this.event.emit({
        event: $event,
        row: row,
        key: key,
        rowId: rowIndex,
        colId: colIndex,
      });
    }
  }

  showColumn(colIndex) {
    return !this.config.hiddenColumns.has(colIndex);
  }

  toggleColumn(colIndex) {
    if (this.config.hiddenColumns.has(colIndex)) {
      this.config.hiddenColumns.delete(colIndex);
    } else {
      this.config.hiddenColumns.add(colIndex);
    }
  }

  get headerKeys() {
    if (this.config.columns.length !== 0) {
      return this.config.columns;
    }
    return this.resource.keys;
  }
}
