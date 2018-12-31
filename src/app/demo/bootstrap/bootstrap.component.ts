import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { ConfigService } from './configuration.service';
import { API, TableAPI } from '../../../../projects/ngx-easy-table/src/lib';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss'],
  // tslint:disable-next-line:use-view-encapsulation
  encapsulation: ViewEncapsulation.None,
  providers: [ConfigService],
})
export class BootstrapComponent implements OnInit {
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

  setBootstrap() {
    this.api.set({
      type: API.setTableClass,
      value: 'table table-bordered table-striped table-sm',
    });
  }

  // tslint:disable-next-line:no-identical-functions
  setNormal() {
    this.api.set({
      type: API.setTableClass,
      value: '',
    });
  }

  setRowClass(row: number, className: string): void {
    this.api.set({
      type: API.setRowClass,
      value: { row, className },
    });
  }

  setCellClass(row: number, cell: number, className: string): void {
    this.api.set({
      type: API.setCellClass,
      value: { row, cell, className },
    });
  }
}
