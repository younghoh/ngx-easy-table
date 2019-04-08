import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'rxjs';

@Pipe({
  name: 'global',
})

export class GlobalSearchPipe implements PipeTransform {
  transform(array: any[], filter: string, filteredCountSubject: Subject<number>) {
    if (typeof array === 'undefined') {
      return;
    }
    if (typeof filter === 'undefined' || Object.keys(filter).length === 0 || filter === '') {
      filteredCountSubject.next(array.length);
      return array;
    }
    const arr = array.filter((row) => {
      const element = JSON.stringify(Object.values(row));
      return element.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1;
    });
    filteredCountSubject.next(arr.length);

    return arr;
  }
}
