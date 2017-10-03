import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { SearchPipe } from "./pipes/header-pipe";
import { PaginationPipe } from "./pipes/pagination-pipe";
import { GlobalSearchPipe } from "./pipes/global-search-pipe";

import { FiltersService } from "./services/filters-service";
import { ConfigService } from "./services/config-service";
import { ResourceService } from "./services/resource-service";
import { HttpService } from "./services/http-service";

import { GlobalSearch } from "./components/global-search/global-search.component";
import { CsvExport } from "./components/dropdown/csv-export.component";
import { Header } from "./components/header/header.component";
import { Pagination } from "./components/pagination/pagination.component";

import 'rxjs/add/operator/map';

@Component({
  selector: 'ng2-table',
  providers: [HttpService, FiltersService, ResourceService, ConfigService],
  // directives: [Header, Pagination, GlobalSearch, CsvExport],
  // pipes: [SearchPipe, PaginationPipe, GlobalSearchPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  @Input() configuration: ConfigService;

  constructor(public filtersService: FiltersService,
              public config: ConfigService,
              public resource: ResourceService,
              public httpService: HttpService) {
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

  public data: Array<any>;
  public keys: Array<any>;
  public numberOfItems: number;
  public itemsObservables;

  public orderBy(key: string) {
    this.data = this.resource.sortBy(key);
  };
}
