import {
  Component, OnInit, Input, ChangeDetectorRef, AfterViewInit, Output, EventEmitter,
  ContentChild, TemplateRef
} from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from './services/http-service';
import { FiltersService } from './services/filters-service';
import { ResourceService } from './services/resource-service';
import { ConfigService } from './services/config-service';
import {ViewEncapsulation} from '@angular/core';

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

export class TableComponent implements OnInit, AfterViewInit {
  public data: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public selectedRow: number;
  public selectedCol: number;
  public selectedCell: number;
  public itemsObservables;

  @Input() configuration: ConfigService;
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
    if (this.config.data.length > 1) {
      this.data = this.config.data;
      this.numberOfItems = this.config.data.length;
      this.keys = Object.keys(this.data[0]);
      this.resource.keys = this.keys;
    } else {
      this.itemsObservables = this.httpService
        .getData(this.config.resourceUrl, this.config.httpHeaders);
      this.itemsObservables.subscribe(res => {
        this.data = res;
        this.numberOfItems = res.length;
        this.keys = Object.keys(this.data[0]);
        this.resource.keys = this.keys;
      });
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
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

  isColumnDefined() {
    if (this.config.columns.length === 0) {
      return false;
    }
    if (this.keys.length !== this.config.columns.length) {
      console.error('columns count in the configuration is not equal to columns count from JSON');
      return false;
    }

    return true;
  }

  showColumn(colIndex) {
    return !this.config.hiddenColumns.has(colIndex);
  }

  toggleColumn(colIndex) {
    if (this.config.hiddenColumns.has(colIndex)) {
      this.config.hiddenColumns.delete(colIndex)
    } else {
      this.config.hiddenColumns.add(colIndex);
    }
  }
}
