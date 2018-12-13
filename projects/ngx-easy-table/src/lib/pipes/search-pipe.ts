import { Pipe, PipeTransform } from '@angular/core';
import { FiltersService } from '../services/filters.service';

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {
  filters: { [key: string]: string } = {};

  transform(array: any[], filter?: { value: string, key: string }): any[] {
    if (typeof array === 'undefined') {
      return;
    }
    if (typeof filter === 'undefined') {
      return array;
    }
    this.filters[filter.key] = filter.value.toString().toLocaleLowerCase();
    if (Object.keys(filter).length === 0 || filter.value === '') {
      delete this.filters[filter.key];
    }
    return array.filter((obj) => {
      return Object.keys(this.filters)
        .every((c) => {
          const split = c.split('.');
          const val = FiltersService.getPath(split, obj);
          const element = (typeof val === 'object') ? JSON.stringify(val) : val.toString().toLocaleLowerCase();
          return element.indexOf(this.filters[c]) > -1;
        });
    });
  }
}
