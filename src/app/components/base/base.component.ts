import {
  AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChange, SimpleChanges, TemplateRef
} from '@angular/core';

import { HttpService } from '../../services/http-service';
import { FiltersService } from '../../services/filters-service';
import { ResourceService } from '../../services/resource-service';
import { ConfigService } from '../../services/config-service';
import { Event } from '../../model/event.enum';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'ngx-table',
  providers: [HttpService, FiltersService, ResourceService, ConfigService, LoggerService],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  public data: Array<any>;
  public filteredData: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public selectedRow: number;
  public selectedCol: number;
  public selectedCell: number;
  public menuActive = false;
  public term;
  public globalSearchTerm;
  public range;

  @Input() configuration: ConfigService;
  @Input() filters: any;
  @Input() sort: any;
  @Output() event = new EventEmitter();
  @ContentChild(TemplateRef) public tpl: TemplateRef<any>;

  constructor(public filtersService: FiltersService,
              public config: ConfigService,
              public resource: ResourceService,
              public httpService: HttpService,
              private cdr: ChangeDetectorRef,
              private logger: LoggerService,
  ) {
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
    const sort: SimpleChange = changes.sort;
    if (filters) {
      this.data = this.filtersService.applyCustomFilters(filters.currentValue, this.filteredData);
    }
    if (sort) {
      this.data = this.resource.sortBy(sort.currentValue.key, sort.currentValue.order);
    }
  }

  orderBy(key: string) {
    if (this.config.orderEnabled) {
      this.data = this.resource.sortBy(key, null);
      this.onOrder(key);
    }
  }

  clickedCell($event: object, row: object, key: string | number | boolean, colIndex: number, rowIndex: number): void {
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
      const value = {
        event: $event,
        row: row,
        key: key,
        rowId: rowIndex,
        colId: colIndex
      };
      this.emitEvent(Event.onClick, value);
    }
  }

  showColumn(colIndex): boolean {
    return !this.config.hiddenColumns.has(colIndex);
  }

  toggleColumn(colIndex): void {
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

  onSearch($event): void {
    this.term = $event;
    this.emitEvent(Event.onSearch, $event);
  }

  onGlobalSearch($event): void {
    this.globalSearchTerm = $event;
    this.emitEvent(Event.onGlobalSearch, $event);
  }

  onPagination($event): void {
    this.range = $event;
    this.emitEvent(Event.onPagination, $event);
  }

  onOrder(key): void {
    const value = {
      key,
      order: this.resource.order[key]
    };
    this.emitEvent(Event.onOrder, value);
  }

  private emitEvent(event, value: Object): void {
    this.logger.info(`event: ${Event[event]}; value: ${JSON.stringify(value)}`);
    this.event.emit({ event: Event[event], value });
  }
}
