import { Component } from '@angular/core';
import { ConfigService } from './configuration.service';
import { data } from '../../../assets/dates';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  providers: [ConfigService],
})
export class TemplateComponent {
  columns = [
    { key: 'phone', title: 'Phone', width: '20%', orderEnabled: true },
    { key: 'age', title: 'Age', width: '20%', orderEnabled: true },
    { key: 'company', title: 'Company', width: '20%', orderEnabled: true },
    { key: 'name', title: 'Name', width: '20%', orderEnabled: false },
    { key: 'isActive', title: 'STATUS', width: '20%', orderEnabled: false },
  ];
  data = [];
  configuration;
  toggleRowIndex;

  constructor() {
    this.configuration = ConfigService.config;
    this.data = data;
  }

  eventEmitted($event) {
    console.log('$event', $event);
  }

  onRowClickEvent($event, index: number): void {
    $event.preventDefault();
    this.toggleRowIndex = { index: index };
  }
}
