import { Component, OnInit } from '@angular/core';
import { Company } from '../../../assets/data';
import { CompanyService } from '../../services/company.service';
import { ConfigService } from './configuration.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css'],
  providers: [ConfigService, CompanyService],
})
export class AsyncComponent implements OnInit {
  configuration;
  data;
  columns = [
    { key: 'id', title: 'id' },
    { key: 'email', title: 'email' },
    { key: 'company', title: 'Company' },
    { key: 'eyeColor', title: 'eyeColor' },
    { key: 'age', title: 'Age' },
    { key: 'balance', title: 'balance' },
    { key: 'surname', title: 'surname' },
    { key: 'name', title: 'Name' },
  ];

  constructor(private companyService: CompanyService) {
    this.configuration = ConfigService.config;
  }

  ngOnInit(): void {
    this.data = this.companyService.getCompanies('');
  }
}
