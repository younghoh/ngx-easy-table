import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { ConfigService } from './configuration.service';
import { API, APIDefinition } from '../../../../projects/ngx-easy-table/src/lib';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  // tslint:disable-next-line:use-view-encapsulation
  encapsulation: ViewEncapsulation.None,
  providers: [ConfigService],
})
export class BootstrapComponent implements OnInit {
  @ViewChild('table') table: APIDefinition;
  public columns;
  public data: Company[] = [];
  public configuration;

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

  setBootstrap() {
    this.table.apiEvent({
      type: API.setTableClass,
      value: 'table table-bordered table-striped table-sm',
    });
  }

  // tslint:disable-next-line:no-identical-functions
  setNormal() {
    this.table.apiEvent({
      type: API.setTableClass,
      value: '',
    });
  }

  setRowClass(row: number, className: string): void {
    this.table.apiEvent({
      type: API.setRowClass,
      value: { row, className },
    });
  }
}
