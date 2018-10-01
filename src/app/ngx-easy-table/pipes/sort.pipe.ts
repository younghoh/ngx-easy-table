import { Pipe, PipeTransform } from '@angular/core';
import { FiltersService } from '../services/filters.service';

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
    const bV = FiltersService.getPath(split, b);
    const aValue = (aPath + '').toLowerCase();
    const bValue = (bV + '').toLowerCase();
    if (SortPipe.isNaN(aPath, bV)) {
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
    } else {
      if (parseFloat(aPath) < parseFloat(bV)) {
        return -1;
      }
      if (parseFloat(aPath) > parseFloat(bV)) {
        return 1;
      }
    }

    return 0;
  }

  transform(value: any, args: any): any {
    if (!args.key || args.key === '') {
      return value;
    }
    if (args.order === 'asc') {
      return value.sort((a, b) => SortPipe.compare(a, b, args.key));
    } else {
      return value.sort((a, b) => SortPipe.compare(b, a, args.key));
    }
  }
}
