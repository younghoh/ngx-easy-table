import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  private static compare(a: Array<any>, b: Array<any>, key): number {
    if ((isNaN(parseFloat(a[key])) || !isFinite(a[key])) || (isNaN(parseFloat(b[key])) || !isFinite(b[key]))) {
      if ((a[key] + '').toLowerCase() < (b[key] + '').toLowerCase()) {
        return -1;
      }
      if ((a[key] + '').toLowerCase() > (b[key] + '').toLowerCase()) {
        return 1;
      }
    } else {
      if (parseFloat(a[key]) < parseFloat(b[key])) {
        return -1;
      }
      if (parseFloat(a[key]) > parseFloat(b[key])) {
        return 1;
      }
    }

    return 0;
  }

  transform(value: any, args: any): any {
    if (args.order === 'asc') {
      return value.sort((a, b) => SortPipe.compare(a, b, args.key));
    } else {
      return value.sort((a, b) => SortPipe.compare(b, a, args.key));
    }
  }
}
