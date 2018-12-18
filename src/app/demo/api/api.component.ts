import { Component, OnInit } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { CompanyService } from '../../services/company.service';
import { ConfigService } from './configuration.service';
import { Subject } from 'rxjs';
import { API, ApiType } from '../../../../projects/ngx-easy-table/src/lib';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
  providers: [ConfigService, CompanyService],
})
export class ApiComponent implements OnInit {
  public columns;
  public data: Company[] = [];
  public configuration;
  public api = new Subject<ApiType>();

  ngOnInit(): void {
    this.configuration = ConfigService.config;
    this.columns = [
      { key: 'phone', title: 'Phone', width: '15%' },
      { key: 'age', title: 'Age', width: '10%' },
      { key: 'company', title: 'Company', width: '15%' },
      { key: 'name', title: 'Name', width: '15%' },
      { key: 'isActive', title: 'STATUS', width: '15%' },
    ];
    this.data = data;
  }

  resetSearchInput() {
    this.api.next({
      type: API.setInputValue,
      value: [
        { name: 'phone', value: '' },
        { name: 'age', value: '' },
      ],
    });
  }

  setPhone() {
    this.api.next({
      type: API.setInputValue,
      value: [
        { name: 'phone', value: '527' },
      ],
    });
  }

  setAge() {
    this.api.next({
      type: API.setInputValue,
      value: [
        { name: 'age', value: '32' },
      ],
    });
  }
}
