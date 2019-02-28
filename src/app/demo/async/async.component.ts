import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { ConfigService } from './configuration.service';
import { Columns } from 'ngx-easy-table';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css'],
  providers: [ConfigService, CompanyService],
})
export class AsyncComponent implements OnInit {
  public configuration;
  public data;
  public columns: Columns[] = [
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
