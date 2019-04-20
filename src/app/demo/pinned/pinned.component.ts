import { Component, OnInit, ViewChild } from '@angular/core';
import { Company, data } from '../../../assets/data';
import { Columns, Config, DefaultConfig, API, APIDefinition } from 'ngx-easy-table';

@Component({
  selector: 'app-pinned',
  templateUrl: './pinned.component.html',
  styleUrls: ['./pinned.component.scss'],
})
export class PinnedComponent implements OnInit {
  public columns: Columns[];
  public data: Company[] = [];
  public configuration: Config;
  @ViewChild('table') table: APIDefinition;

  ngOnInit(): void {
    this.configuration = DefaultConfig;
    this.configuration.horizontalScroll = true;
    this.data = data;
    this.columns = [
      { key: 'phone', title: 'Phone' },
      { key: 'age', title: 'Age' },
      { key: 'company', title: 'Company' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'name', title: 'Name' },
      { key: 'isActive', title: 'STATUS' },
    ];
  }

  setColumnBG(column: number, className: string) {
    this.table.apiEvent({
      type: API.setColumnClass,
      value: { column, className, includeHeader: false },
    });
  }

  pinColumn(column: number) {
    this.table.apiEvent({
      type: API.setColumnPinned,
      value: { column, pinned: true },
    });
  }

  unpinColumn(column: number) {
    this.table.apiEvent({
      type: API.setColumnPinned,
      value: { column, pinned: false },
    });
  }
}
