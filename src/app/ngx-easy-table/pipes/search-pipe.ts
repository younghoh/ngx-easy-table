import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {
  transform(value: any, filter?: any): any {
    if (typeof value === 'undefined') {
      return;
    }

    if (typeof filter === 'undefined' || Object.keys(filter).length === 0 || filter.value === '') {
      return value;
    }

    return value.filter((item) => {
      let element = '';
      if (typeof item[filter.key] === 'string') {
        element = item[filter.key].toLocaleLowerCase();
      }
      if (typeof item[filter.key] === 'object') {
        element = JSON.stringify(item[filter.key]);
      }
      if (typeof item[filter.key] === 'number') {
        element = item[filter.key].toString();
      }
      if (typeof item[filter.key] === 'boolean') {
        element = item[filter.key].toString();
      }
      return element.indexOf(filter.value.toLocaleLowerCase()) !== -1;
    });
  }
}
