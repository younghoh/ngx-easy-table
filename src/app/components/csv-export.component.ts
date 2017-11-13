import { Component } from '@angular/core';
import { ResourceService } from '../services';

@Component({
  selector: 'csv-export',
  template: `
    <a (click)="exportCsv()">
      CSV export
    </a>`
})

export class CsvExportComponent {
  constructor(public resource: ResourceService) {
  }

  public exportCsv = () => {
    const data = this.resource.data;
    let csvContent = 'data:text/csv;charset=utf-8,';
    let dataString = '';
    const x: Array<any> = [];
    const keys = Object.keys(this.resource.data[0]);
    data.forEach((row, index) => {
      x[index] = [];
      keys.forEach((i) => {
        if (row.hasOwnProperty(i)) {
          if (typeof row[i] === 'object') {
            row[i] = 'Object'; // so far just change object to "Object" string
          }
          x[index].push(row[i]);
        }
      });
    });

    csvContent += keys + '\n';
    x.forEach((row, index) => {
      dataString = row.join(',');
      csvContent += index < data.length ? dataString + '\n' : dataString;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'my_data.csv');

    link.click();
  }
}
