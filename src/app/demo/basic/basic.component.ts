import { Component } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { Columns, Config, DefaultConfigService } from 'ngx-easy-table';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent {
  public configuration: Config;
  public columns: Columns[] = [
    { key: 'phone', title: 'Phone' },
    { key: 'age', title: 'Age' },
    { key: 'company', title: 'Company' },
    { key: 'name', title: 'Name' },
    { key: 'isActive', title: 'STATUS' },
  ];

  data: Company[] = [];

  constructor() {
    this.data = data;
    this.configuration = DefaultConfigService.config;
  }
}
