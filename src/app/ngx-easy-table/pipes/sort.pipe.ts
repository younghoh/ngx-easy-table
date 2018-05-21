import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  private static compare(a: Array<any>, b: Array<any>, key: string): number {
    const get = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);
    const split = key.split('.');
    const aV = get(split, a);
    const bV = get(split, b);
    if ((isNaN(parseFloat(aV)) || !isFinite(aV)) || (isNaN(parseFloat(bV)) || !isFinite(bV))) {
      if ((aV + '').toLowerCase() < (bV + '').toLowerCase()) {
        return -1;
      }
      if ((aV + '').toLowerCase() > (bV + '').toLowerCase()) {
        return 1;
      }
    } else {
      if (parseFloat(aV) < parseFloat(bV)) {
        return -1;
      }
      if (parseFloat(aV) > parseFloat(bV)) {
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
