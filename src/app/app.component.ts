import { Component, OnInit } from '@angular/core';
import { ConfigService } from './app.service';
import { data } from '../assets/data';

@Component({
  selector: 'app-table',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfigService],
})
export class AppComponent implements OnInit {
  configuration;
  data;
  columns;

  constructor() {
  }

  ngOnInit() {
    this.configuration = ConfigService.config;
    this.columns = [
      { key: 'phone', title: 'phone' },
      { key: 'age', title: 'age' },
      { key: 'address.street', title: 'Address' },
      { key: 'company', title: 'company' },
      { key: 'name', title: 'name' },
      { key: 'isActive', title: 'isActive' },
    ];
    this.data = data;
  }
}
