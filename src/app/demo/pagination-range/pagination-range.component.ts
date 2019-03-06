import { Component } from '@angular/core';
import * as faker from 'faker';
import { ConfigService } from './configuration.service';
import { Columns } from 'ngx-easy-table';

@Component({
  selector: 'app-pagination-range',
  templateUrl: './pagination-range.component.html',
  styleUrls: ['./pagination-range.component.css'],
})
export class PaginationRangeComponent {

  configuration;
  public columns: Columns[] = [
    { key: 'phone', title: 'Phone' },
    { key: 'age', title: 'Age' },
    { key: 'company', title: 'Company' },
    { key: 'name', title: 'Name' },
    { key: 'isActive', title: 'STATUS' },
  ];

  data = [];

  constructor() {
    this.configuration = ConfigService.config;
    this.data = PaginationRangeComponent.generateData();
  }

  private static generateData() {
    return Array(170).fill('').map(() => {
      return {
        phone: faker.phone.phoneNumberFormat(),
        age: faker.random.number({ min: 15, max: 70 }).toString(),
        company: faker.company.companyName(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        isActive: faker.random.boolean(),
      };
    });
  }
}
