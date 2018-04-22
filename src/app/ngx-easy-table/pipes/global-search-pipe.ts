import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'global',
})

export class GlobalSearchPipe implements PipeTransform {
  transform(dataArr: any, filter?: any) {
    if (typeof dataArr === 'undefined') {
      return;
    }
    if (typeof filter === 'undefined' || Object.keys(filter).length === 0 || filter === '') {
      return dataArr;
    }
    return dataArr.filter((row) => {
      const element = JSON.stringify(row);
      return element.toLocaleLowerCase().indexOf(filter.value.toLocaleLowerCase()) !== -1;
    });
  }
}
