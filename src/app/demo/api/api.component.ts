import { Component, OnInit } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { CompanyService } from '../../services/company.service';
import { ConfigService } from './configuration.service';
import { API, TableAPI } from '../../../../projects/ngx-easy-table/src/lib';

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
  public readonly api = new TableAPI();

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
    this.api.set({
      type: API.setInputValue,
      value: [
        { key: 'phone', value: '' },
        { key: 'age', value: '' },
        { key: 'company', value: '' },
      ],
    });
  }

  setPhone() {
    this.api.set({
      type: API.setInputValue,
      value: [
        { key: 'phone', value: '527' },
      ],
    });
  }

  // tslint:disable-next-line:no-identical-functions
  setAge() {
    this.api.set({
      type: API.setInputValue,
      value: [
        { key: 'age', value: '32' },
      ],
    });
  }

  setPagination(page: number) {
    this.api.set({
      type: API.setPaginationCurrentPage,
      value: page,
    });
  }

  setRowClass(row: number, className: string): void {
    this.api.set({
      type: API.setRowClass,
      value: { row, className },
    });
  }

  setRowStyle(): void {
    this.api.set({
      type: API.setRowStyle,
      value: { row: 1, attr: 'background', value: '#fd5e5ed4' },
    });
  }

  setRowClasses(): void {
    this.api.set({
      type: API.setRowClass,
      value: [
        {
          row: 1,
          className: 'gray',
        },
        {
          row: 2,
          className: 'pink',
        },
        {
          row: 4,
          className: 'yellow',
        },
      ],
    });
  }
}
