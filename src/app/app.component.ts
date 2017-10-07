import { Component, OnInit, Input, ChangeDetectorRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

import { FiltersService } from "./services/filters-service";
import { ConfigService } from "./services/config-service";
import { ResourceService } from "./services/resource-service";
import { HttpService } from "./services/http-service";

import 'rxjs/add/operator/map';

@Component({
  selector: 'ng2-table',
  providers: [HttpService, FiltersService, ResourceService, ConfigService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class TableComponent implements OnInit, AfterViewInit {
  @Input() configuration: ConfigService;
  @Output() event = new EventEmitter();

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
    this.itemsObservables = this.httpService.getData(this.config.resourceUrl);
    this.itemsObservables.subscribe(res => {
      this.data = res;
      this.numberOfItems = res.length;
      this.keys = Object.keys(this.data[0]);
      this.resource.keys = this.keys;
    });
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  public data: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public itemsObservables;

  public orderBy(key: string) {
    this.data = this.resource.sortBy(key);
  }

  rowEvent($event, row, key) {
    if (this.configuration.clickEvent) {
      this.event.emit({
        event: $event,
        row: row,
        key: key,
      });
    }
  }
}
