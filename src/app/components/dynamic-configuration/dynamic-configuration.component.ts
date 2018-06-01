import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ConfigService } from './configuration.service';
import { data, columns } from '../../../assets/data';
@Component({
  selector: 'app-dynamic-configuration',
  templateUrl: './dynamic-configuration.component.html',
  styleUrls: ['./dynamic-configuration.component.css']
})
export class DynamicConfigurationComponent {
  @ViewChild('detailsTemplate') detailsTemplateRef: TemplateRef<any>;
  columns = [];
  data = [];
  checked = {
    'paginationEnabled': true,
    'headerEnabled': true,
    'searchEnabled': true,
    'collapseAllRows': false,
    'isLoading': false
  };
  configuration;
  constructor() {
    this.configuration = ConfigService.config;
    this.data = data;
    this.columns = columns;
  }

  toggle(key: string, isChecked: boolean): void {
    console.log('key: ', key, isChecked);
    this.checked[key] = isChecked;
    this.configuration[key] = isChecked;
    this.configuration = { ...this.configuration };
  }
}
