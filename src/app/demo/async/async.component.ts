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
  public configuration;
  public data;
  public columns = [
    { key: 'phone', title: 'Phone' },
    { key: 'age', title: 'Age' },
    { key: 'company', title: 'Company' },
    { key: 'name', title: 'Name' },
    { key: 'isActive', title: 'STATUS' },
  ];

  constructor(private companyService: CompanyService) {
    this.configuration = ConfigService.config;
  }

  ngOnInit(): void {
    this.data = this.companyService.getCompanies('');
  }
}
