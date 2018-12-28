import { Injectable } from '@angular/core';
import { rowClass, rowStyle } from '../model/api';

@Injectable()
export class StyleService {
  static setRowClass(val: rowClass): void {
    const selector = `#table > tbody > tr:nth-child(${val.row})`;
    const row: HTMLTableRowElement = document.querySelector(selector);
    if (row) {
      row.className = val.className;
    }
  }

  static setRowStyle(val: rowStyle): void {
    const selector = `#table > tbody > tr:nth-child(${val.row})`;
    const row: HTMLTableRowElement = document.querySelector(selector);
    if (row) {
      // tslint:disable-next-line:no-string-literal
      row.style[val.attr] = val.value;
    }
  }
}
