import {
  AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChange, SimpleChanges, TemplateRef
} from '@angular/core';

import { FiltersService } from '../../services/filters-service';
import { ResourceService } from '../../services/resource-service';
import { ConfigService } from '../../services/config-service';
import { Event } from '../../model/event.enum';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'ngx-table',
  providers: [FiltersService, ResourceService, ConfigService, LoggerService],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  public filteredData: Array<any>;
  public numberOfItems: number;
  public selectedRow: number;
  public selectedCol: number;
  public term;
  public globalSearchTerm;
  public range;

  @Input() configuration: ConfigService;
  @Input() filters: any;
  @Input() sort: any;
  @Input() data: Array<Object>;
  @Input() rows: number;
  @Input() columns: Array<string>;
  @Output() event = new EventEmitter();
  @ContentChild(TemplateRef) public tpl: TemplateRef<any>;

  constructor(public filtersService: FiltersService,
              public config: ConfigService,
              public resource: ResourceService,
              private cdr: ChangeDetectorRef,
              private logger: LoggerService,
  ) {
  }

  ngOnInit() {
    if (this.configuration) {
      this.config = this.configuration;
    }
    this.filteredData = [...this.data];
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    const filters: SimpleChange = changes.filters;
    const sort: SimpleChange = changes.sort;
    const data: SimpleChange = changes.data;
    const rows: SimpleChange = changes.rows;
    if (filters) {
      this.data = this.filtersService.applyCustomFilters(filters.currentValue, this.filteredData);
    }
    if (sort) {
      this.data = this.resource.sortBy(sort.currentValue.key, sort.currentValue.order);
    }
    if (data) {
      this.data = [...data.currentValue];
      console.log('lib this.data: ', this.data);
    }
    if (rows) {
      this.numberOfItems = rows.currentValue;
      console.log('lib this.numberOfItems: ', this.numberOfItems);
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

  toggleColumn(colIndex): void {
    const toggleColumns = new Set(this.columns);
    if (toggleColumns.has(colIndex)) {
      toggleColumns.delete(colIndex);
    } else {
      toggleColumns.add(colIndex);
    }
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
