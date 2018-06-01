import { Component } from '@angular/core';
import { ConfigService } from './configuration.service';
import { data, columns } from '../../../assets/data';
@Component({
  selector: 'app-toggle-column',
  templateUrl: './toggle-column.component.html',
  styleUrls: ['./toggle-column.component.css']
})
export class ToggleColumnComponent {
  columns = [];
  columnsCopy = [];
  data = [];
  checked = new Set(['phone', 'age', 'company', 'name', 'isActive']);
  configuration;
  constructor() {
    this.configuration = ConfigService.config;
    this.data = data;

    this.columns = columns;
    this.columnsCopy = columns;
  }

  toggle(name: string, value: boolean): void {
    value ? this.checked.add(name) : this.checked.delete(name);
    this.columns = this.columnsCopy.filter(column => this.checked.has(column.key));
  }
}
