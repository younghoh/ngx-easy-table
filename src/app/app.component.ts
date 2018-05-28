import { Component, OnInit } from '@angular/core';
import { ConfigService } from './app.service';
import { data } from '../assets/data';
import { Columns } from './ngx-easy-table/model/columns';

@Component({
  selector: 'app-table',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService],
})
export class AppComponent implements OnInit {
  configuration;
  data;
  columns: Columns[];

  constructor() {
  }

  ngOnInit() {
    this.configuration = ConfigService.config;
    this.columns = [
      { key: 'phone', title: 'phone', placeholder: 'Search phone', width: '15%' },
      { key: 'age', title: 'age', placeholder: 'Search age', width: '10%' },
      { key: 'address.street', title: 'Address', placeholder: 'Search street', width: '25%' },
      { key: 'company', title: 'company', placeholder: 'Search company', width: '20%' },
      { key: 'name', title: 'name', placeholder: 'Search name', width: '20%' },
      { key: 'isActive', title: 'isActive', placeholder: 'Search status', width: '10%' },
    ];
    this.data = data;
  }
}
