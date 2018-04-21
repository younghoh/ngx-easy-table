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
} from '@angular/core';

import { ResourceService } from '../../services/resource-service';
import { ConfigService } from '../../services/config-service';
import { Event } from '../../model/event.enum';
import { LoggerService } from '../../services/logger.service';
import { Config } from '../../model/config';
import { from } from 'rxjs/observable/from';
import { flatMap, groupBy, reduce } from 'rxjs/operators';

@Component({
  selector: 'ngx-table',
  providers: [ResourceService, LoggerService, ConfigService],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent implements OnInit, OnChanges, AfterViewInit {
  public selectedRow: number;
  public selectedCol: number;
  public term;
  public config: Config;
  public globalSearchTerm;
  grouped = [];
  menuActive = false;
  page = 1;
  count = null;
  limit;
  selectedDetailsTemplateRowId = new Set();
  id;
  @Input() configuration: Config;
  @Input() data: Array<Object>;
  @Input() pagination;
  @Input() groupRowsBy;
  @Input() detailsTemplate;
  @Input() columns: Array<string>;
  @Output() event = new EventEmitter();
  @ContentChild(TemplateRef) public rowTemplate: TemplateRef<any>;

  constructor(public resource: ResourceService,
              private cdr: ChangeDetectorRef,
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
    if (!ConfigService.config.serverPagination) {
      this.data = this.resource.sortBy(key);
      this.data = [...this.data];
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
        colId: colIndex,
      };
      this.emitEvent(Event.onClick, value);
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
      order: this.resource.order[key],
    };
    this.emitEvent(Event.onOrder, value);
  }

  private emitEvent(event, value: Object): void {
    this.logger.info(`event: ${Event[event]}; value: ${JSON.stringify(value)}`);
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
        reduce((acc: Array<Object>, curr) => [...acc, curr], [])
      )),
    ).subscribe(row => this.grouped.push(row));
  }
}
