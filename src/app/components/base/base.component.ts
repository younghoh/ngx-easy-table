import {
  AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChange, SimpleChanges, TemplateRef
} from '@angular/core';

import { FiltersService } from '../../services/filters-service';
import { ResourceService } from '../../services/resource-service';
import { ConfigService } from '../../services/config-service';
import { Event } from '../../model/event.enum';
import { LoggerService } from '../../services/logger.service';
import { Config } from '../../model/config';

@Component({
  selector: 'ngx-table',
  providers: [FiltersService, ResourceService, LoggerService, ConfigService],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit, OnChanges, AfterViewInit {
  public filteredData: Array<any>;
  public selectedRow: number;
  public selectedCol: number;
  public term;
  public config: Config;
  public globalSearchTerm;
  menuActive = false;
  page = 1;
  count = null;
  limit = 10;

  @Input() configuration: Config;
  @Input() filters: any;
  @Input() sort: any;
  @Input() data: Array<Object>;
  @Input() pagination;
  @Input() columns: Array<string>;
  @Output() event = new EventEmitter();
  @ContentChild(TemplateRef) public tpl: TemplateRef<any>;

  constructor(public filtersService: FiltersService,
              public resource: ResourceService,
              private cdr: ChangeDetectorRef,
              private logger: LoggerService) {
  }

  ngOnInit() {
    if (this.configuration) {
      ConfigService.config = this.configuration;
    }
    this.config = ConfigService.config;
    if (this.data) {
      this.filteredData = [...this.data];
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    const filters: SimpleChange = changes.filters;
    const sort: SimpleChange = changes.sort;
    const data: SimpleChange = changes.data;
    const pagination: SimpleChange = changes.pagination;
    if (filters) {
      this.data = this.filtersService.applyCustomFilters(filters.currentValue, this.filteredData);
    }
    if (sort) {
      this.data = this.resource.sortBy(sort.currentValue.key, sort.currentValue.order);
    }
    if (data && data.currentValue) {
      this.data = [...data.currentValue];
    }
    if (pagination && pagination.currentValue) {
      this.count = pagination.currentValue.count;
    }
  }

  orderBy(key: string) {
    if (ConfigService.config.orderEnabled || !ConfigService.config.serverPagination) {
      this.data = this.resource.sortBy(key, null);
    }
    this.onOrder(key);
  }

  clickedCell($event: object, row: object, key: string | number | boolean, colIndex: number, rowIndex: number): void {
    if (ConfigService.config.selectRow) {
      this.selectedRow = rowIndex;
    }
    if (ConfigService.config.selectCol) {
      this.selectedCol = colIndex;
    }
    if (ConfigService.config.selectCell) {
      this.selectedRow = rowIndex;
      this.selectedCol = colIndex;
    }
    if (ConfigService.config.clickEvent) {
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

  toggleColumn(colIndex): void {
    const toggleColumns = new Set(this.columns);
    if (toggleColumns.has(colIndex)) {
      toggleColumns.delete(colIndex);
    } else {
      toggleColumns.add(colIndex);
    }
  }

  onSearch($event): void {
    if (!ConfigService.config.serverPagination) {
      this.term = $event;
    }
    this.emitEvent(Event.onSearch, $event);
  }

  onGlobalSearch($event): void {
    if (!ConfigService.config.serverPagination) {
      this.globalSearchTerm = $event;
    }
    this.emitEvent(Event.onGlobalSearch, $event);
  }

  onPagination($event): void {
    this.page = $event.page;
    this.limit = $event.limit;
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
