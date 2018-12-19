import { Pipe, PipeTransform } from '@angular/core';
import { FiltersService } from '../services/filters.service';
import { Config } from '..';

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {
  private filters: { [key: string]: string } = {};

  transform(array: any[], filter?: Array<{ value: string, key: string }>, config?: Config): any[] {
    if (typeof array === 'undefined') {
      return;
    }
    if (typeof filter === 'undefined') {
      return array;
    }
    filter.forEach((f) => {
      this.filters[f.key] = f.value.toString().toLocaleLowerCase();
      if (Object.keys(f).length === 0 || f.value === '') {
        delete this.filters[f.key];
      }
    });
    if (config && config.groupRows) {
      return array.map((arr) => this.filterGroup(arr));
    }
    return this.filterGroup(array);
  }

  private filterGroup(array: any[]) {
    return array.filter((obj) => {
      return Object.keys(this.filters).every((c) => {
        const split = c.split('.');
        const val = FiltersService.getPath(split, obj);
        const element = (typeof val === 'object') ? JSON.stringify(val) : val.toString().toLocaleLowerCase();
        return element.indexOf(this.filters[c]) > -1;
      });
    });
  }
}
