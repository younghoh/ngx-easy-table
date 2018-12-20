import { Component, OnInit } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { ConfigService } from './configuration.service';
import { API, TableAPI } from '../../../../projects/ngx-easy-table/src/lib';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  providers: [ConfigService],
  styles: [],
})
export class GlobalSearchComponent implements OnInit {
  public readonly api = new TableAPI();
  public columns = [
    { key: 'phone', title: 'Phone' },
    { key: 'age', title: 'Age' },
    { key: 'company', title: 'Company' },
    { key: 'name', title: 'Name' },
    { key: 'isActive', title: 'STATUS' },
  ];
  public data: Company[] = [];
  public configuration;

  ngOnInit(): void {
    this.configuration = ConfigService.config;
    this.data = data;
  }

  onChange(name: string): void {
    this.api.set({
      type: API.onGlobalSearch, value: name,
    });
  }
}
