import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { ConfigService } from '../../services/config-service';
import { Event } from '../../model/event.enum';
import { LoggerService } from '../../services/logger.service';
import { Config } from '../../model/config';
import { from } from 'rxjs/observable/from';
import { flatMap, groupBy, reduce } from 'rxjs/operators';
import { PaginationComponent } from '../pagination/pagination.component';
import { ApiType, API } from '../api';

@Component({
  selector: 'ngx-table',
  providers: [LoggerService, ConfigService],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('paginationComponent') private paginationComponent: PaginationComponent;
  public selectedRow: number;
  public selectedCol: number;
  public term;
  public config: Config;
  public globalSearchTerm;
  grouped = [];
  menuActive = false;
  isSelected = false;
  page = 1;
  count = null;
  limit;
  sortBy = {
    key: '',
    order: 'asc'
  };
  selectedDetailsTemplateRowId = new Set();
  id;
  onSelectAllBinded = this.onSelectAll.bind(this);

  @Input() configuration: Config;
  @Input() data: Array<Object>;
  @Input() pagination;
  @Input() groupRowsBy;
  @Input() detailsTemplate;
  @Input() selectAllTemplate: TemplateRef<any>;
  @Input() columns: Array<string>;
  @Output() event = new EventEmitter();
  @ContentChild(TemplateRef) public rowTemplate: TemplateRef<any>;

  constructor(private cdr: ChangeDetectorRef,
              private logger: LoggerService) {
    // make random pagination ID to avoid situation when we have more than 1 table at page
    this.id = Math.floor((Math.random() * 10000) + 1);
  }

  ngOnInit() {
    if (this.configuration) {
      ConfigService.config = this.configuration;
    }
    this.config = ConfigService.config;
    this.limit = this.configuration.rows;
    if (this.groupRowsBy) {
      this.doGroupRows();
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    const data: SimpleChange = changes.data;
    const pagination: SimpleChange = changes.pagination;
    const configuration: SimpleChange = changes.configuration;
    const groupRowsBy: SimpleChange = changes.groupRowsBy;
    if (data && data.currentValue) {
      this.data = [...data.currentValue];
    }
    if (pagination && pagination.currentValue) {
      this.count = pagination.currentValue.count;
    }
    if (configuration && configuration.currentValue) {
      this.config = configuration.currentValue;
      this.cdr.markForCheck();
    }
    if (groupRowsBy && groupRowsBy.currentValue) {
      this.doGroupRows();
    }
  }

  orderBy(key: string): void {
    if (!ConfigService.config.orderEnabled) {
      return;
    }
    this.sortBy.key = key;
    if (this.sortBy.order === 'asc') {
      this.sortBy.order = 'desc';
    } else {
      this.sortBy.order = 'asc';
    }
    const value = {
      key,
      order: this.sortBy.order,
    };
    if (!ConfigService.config.serverPagination) {
      this.data = [...this.data];
    }
    this.emitEvent(Event.onOrder, value);
  }

  onClick($event: object, row: object, key: string | number | boolean, colIndex: number, rowIndex: number): void {
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
        colId: colIndex,
      };
      this.emitEvent(Event.onClick, value);
    }
  }

  onDoubleClick($event: object, row: object, key: string | number | boolean, colIndex: number, rowIndex: number): void {
    const value = {
      event: $event,
      row: row,
      key: key,
      rowId: rowIndex,
      colId: colIndex,
    };
    this.emitEvent(Event.onDoubleClick, value);
  }

  onCheckboxSelect($event: object, row: object, rowIndex: number): void {
    const value = {
      event: $event,
      row: row,
      rowId: rowIndex,
    };
    this.emitEvent(Event.onCheckboxSelect, value);
  }

  onSelectAll() {
    this.isSelected = !this.isSelected;
    this.emitEvent(Event.onSelectAll, this.isSelected);
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

  private emitEvent(event, value: Object): void {
    console.log(Event[event], value);
    this.event.emit({ event: Event[event], value });
  }

  selectRowId(rowIndex): void {
    if (this.selectedDetailsTemplateRowId.has(rowIndex)) {
      this.selectedDetailsTemplateRowId.delete(rowIndex);
    } else {
      this.selectedDetailsTemplateRowId.add(rowIndex);
    }
  }

  private doGroupRows() {
    this.grouped = [];
    from(this.data).pipe(
      groupBy(row => row[this.groupRowsBy]),
      flatMap(group => group.pipe(
        reduce((acc: Array<Object>, curr) => [...acc, curr], []),
      )),
    ).subscribe(row => this.grouped.push(row));
  }

  isRowCollapsed(rowIndex: number): boolean {
    if (this.config.collapseAllRows) {
      return true;
    }
    return this.selectedDetailsTemplateRowId.has(rowIndex);
  }

  apiEvent(event: ApiType): void | number {
    return this.bindApi(event);
  }

  // tslint:disable:no-big-function cognitive-complexity
  private bindApi(event: ApiType): void | number {
    switch (event.type) {
      case API.setPaginationCurrentPage:
        this.paginationComponent.paginationDirective.setCurrent(event.value);
        break;
      case API.setPaginationDisplayLimit:
        this.paginationComponent.changeLimit(event.value, true);
        break;
      default:
        break;
    }
  }
}
