import { Component } from '@angular/core';
import { Company } from '../../../assets/data';
import { ConfigService } from './configuration.service';
import { Columns } from 'ngx-easy-table';

@Component({
  selector: 'app-no-results-template',
  templateUrl: './no-results-template.component.html',
  styleUrls: ['./no-results-template.component.css'],
  providers: [ConfigService],
})
export class NoResultsTemplateComponent {

  public columns: Columns[] = [
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
    { key: 'company', title: 'Company' },
    { key: 'phone', title: 'Phone' },
    { key: 'address.street', title: 'Street' },
  ];
  data: Company[] = [];
  rows: Company[] = [];
  ages: number[] = [];
  configuration;

  constructor() {
    this.configuration = ConfigService.config;
    this.data = [];
  }

}
