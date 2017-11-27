import { Pipe, PipeTransform } from '@angular/core';
import { ResourceService } from '../services/resource-service';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  constructor(public resource: ResourceService) {
  }

  transform(value, filters) {
    if (typeof value === 'undefined') {
      return;
    }
    this.resource.data = value.slice();

    if (typeof filters === 'undefined' || Object.keys(filters).length === 0) {
      return this.resource.data;
    }

    const filtersArr = [];
    filtersArr[filters.key] = filters.value;
    value.forEach((item) => {
      for (const filterKey in filtersArr) {
        if (filtersArr.hasOwnProperty(filterKey)) {
          let element = '';
          if (typeof item[filterKey] === 'string') {
            element = item[filterKey].toLocaleLowerCase();
          }
          if (typeof item[filterKey] === 'object') {
            element = JSON.stringify(item[filterKey]);
          }
          if (typeof item[filterKey] === 'number') {
            element = item[filterKey].toString();
          }
          if (typeof item[filterKey] === 'boolean') {
            element = item[filterKey].toString();
          }
          if (element.indexOf(filtersArr[filterKey].toLocaleLowerCase()) === -1) {
            this.resource.data.splice(this.resource.data.indexOf(item), 1);
            return;
          }
        }
      }
    });

    return this.resource.data;
  }
}
