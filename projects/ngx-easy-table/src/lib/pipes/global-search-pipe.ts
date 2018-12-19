import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'global',
})

export class GlobalSearchPipe implements PipeTransform {
  transform(dataArr: any[], filter: string) {
    if (typeof dataArr === 'undefined') {
      return;
    }
    if (typeof filter === 'undefined' || Object.keys(filter).length === 0 || filter === '') {
      return dataArr;
    }
    return dataArr.filter((row) => {
      const element = JSON.stringify(Object.values(row));
      return element.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1;
    });
  }
}
