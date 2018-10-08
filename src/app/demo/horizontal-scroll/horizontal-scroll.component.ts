import { Component, NgZone, OnInit } from '@angular/core';
import * as faker from 'faker';
import { ConfigService } from './configuration.service';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.css'],
  providers: [ConfigService],
})
export class HorizontalScrollComponent implements OnInit {
  data;
  configuration;
  columns = [
    { key: 'phone', title: 'Phone' },
    { key: 'age', title: 'Age' },
    { key: 'company', title: 'Company' },
    { key: 'name', title: 'Name' },
    { key: 'isActive', title: 'STATUS' },
    { key: 'company2', title: 'Company2' },
    { key: 'company3', title: 'Company3' },
    { key: 'company4', title: 'Company4' },
    { key: 'company5', title: 'Company5' },
    { key: 'company6', title: 'Company6' },
    { key: 'company7', title: 'Company7' },
    { key: 'company8', title: 'Company8' },
    { key: 'company9', title: 'Company9' },
    { key: 'company10', title: 'Company10' },
    { key: 'company11', title: 'Company11' },
  ];

  constructor(private zone: NgZone) {
    this.configuration = ConfigService.config;
  }

  private static generateData() {
    return Array(20).fill('').map(() => {
      return {
        phone: faker.phone.phoneNumberFormat(),
        age: faker.random.number({ min: 15, max: 70 }).toString(),
        company: faker.company.companyName(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        isActive: faker.random.boolean(),
        company2: faker.company.companyName(),
        company3: faker.company.companyName(),
        company4: faker.company.companyName(),
        company5: faker.company.companyName(),
        company6: faker.company.companyName(),
        company7: faker.company.companyName(),
        company8: faker.company.companyName(),
        company9: faker.company.companyName(),
        company10: faker.company.companyName(),
        company11: faker.company.companyName(),
      };
    });
  }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.data = HorizontalScrollComponent.generateData();
    });
  }
}
