import { Pipe, PipeTransform } from '@angular/core';
import { FiltersService } from '../services/filters.service';
import { Config } from '..';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  private static isNaN(aV, bV) {
    return (isNaN(parseFloat(aV)) || !isFinite(aV)) || (isNaN(parseFloat(bV)) || !isFinite(bV));
  }

  private static compare(a: any[], b: any[], key: string): number {
    const split = key.split('.');
    const aPath = FiltersService.getPath(split, a);
    const bPath = FiltersService.getPath(split, b);
    const aValue = (aPath + '').toLowerCase();
    const bValue = (bPath + '').toLowerCase();
    if (SortPipe.isNaN(aPath, bPath)) {
      return aValue.localeCompare(bValue);
    } else {
      if (parseFloat(aPath) < parseFloat(bPath)) {
        return -1;
      }
      if (parseFloat(aPath) > parseFloat(bPath)) {
        return 1;
      }
    }

    return 0;
  }

  transform(array: any[], filter?: { order: string, key: string }, config?: Config): any[] {
    if (!filter.key || filter.key === '') {
      return array;
    }
    if (filter.order === 'asc') {
      if (config && config.groupRows) {
        return array.map((arr) => arr.sort((a, b) => SortPipe.compare(a, b, filter.key)));
      }
      return array.sort((a, b) => SortPipe.compare(a, b, filter.key));
    } else {
      if (config && config.groupRows) {
        return array.map((arr) => arr.sort((a, b) => SortPipe.compare(b, a, filter.key)));
      }
      return array.sort((a, b) => SortPipe.compare(b, a, filter.key));
    }
  }
}
