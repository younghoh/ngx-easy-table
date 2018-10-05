import { Component } from '@angular/core';
import * as faker from 'faker';
import { ConfigService } from './configuration.service';

@Component({
  selector: 'app-group-rows',
  templateUrl: './group-rows.component.html',
  styleUrls: ['./group-rows.component.css'],
  providers: [ConfigService],
})
export class GroupRowsComponent {
  configuration;
  ageSummary = 0;
  columns = [];
  data = [];
  groupBy = 'isActive';

  constructor() {
    this.configuration = ConfigService.config;
    this.data = GroupRowsComponent.generateData();
    this.columns = [
      { key: 'amount', title: 'Amount' },
      { key: 'debit', title: 'Debit' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'Active' },
    ];
  }

  private static generateData() {
    return Array(30).fill('').map(() => {
      return {
        amount: faker.random.number({ min: 15, max: 70 }),
        debit: faker.random.number({ min: 15, max: 70 }),
        company: faker.company.companyName(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        isActive: faker.random.boolean(),
      };
    });
  }

  onChange(name): void {
    this.groupBy = name;
  }

  showCount(group, key: string) {
    return group.map((row) => row[key]).reduce((acc, cur) => cur + acc , 0);
  }
}
