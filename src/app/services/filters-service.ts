import { Injectable } from '@angular/core';
import { ResourceService } from './resource-service';
import { isNumeric } from 'rxjs/util/isNumeric';

@Injectable()
export class FiltersService {

  constructor(public resource: ResourceService) {
  }

  public filters: Array<any> = [];

  update(k: string, v: string) {
    this.filters[k] = v;
  }

  get(): Array<any> {
    return this.filters;
  }

  public applyCustomFilters(filters: Object, data: Array<Object>): Array<Object> {
    if (Object.keys(filters).length === 0) {
      return data;
    }
    const tmpData = [...data];
    data.forEach((row) => {
      Object.keys(filters).forEach((key) => {
        const cell = row[key];
        const filter = filters[key];
        switch (filter['query']) {
          case '=': {
            // TODO add Date type
            if ((isNumeric(cell) && isNumeric(filter['value'])) ||
              typeof cell === 'boolean' && typeof filter['value'] === 'boolean') {
              if (cell !== filter['value']) {
                tmpData.splice(tmpData.indexOf(row), 1);
              }
              break;
            }
            if (cell.toLocaleLowerCase().indexOf(filter['value'].toLocaleLowerCase()) === -1) {
              tmpData.splice(tmpData.indexOf(row), 1);
            }
            break;
          }
          case '>': {
            if (!(cell > filter['value'])) {
              tmpData.splice(tmpData.indexOf(row), 1);
            }
            break;
          }
          case '>=': {
            if (!(cell >= filter['value'])) {
              tmpData.splice(tmpData.indexOf(row), 1);
            }
            break;
          }
          case '<': {
            if (!(cell < filter['value'])) {
              tmpData.splice(tmpData.indexOf(row), 1);
            }
            break;
          }
          case '<=': {
            if (!(cell <= filter['value'])) {
              tmpData.splice(tmpData.indexOf(row), 1);
            }
            break;
          }
          case 'IN': {
            if (filter['value'].length === 0) {
              break;
            }
            if (filter['value'].indexOf(cell) === -1) {
              tmpData.splice(tmpData.indexOf(row), 1);
            }
            break;
          }
        }
      });
    });

    return tmpData;
  }
}
