import { Injectable } from '@angular/core';
import { rowClass, rowStyle, cellClass, cellStyle } from '../model/api';

@Injectable()
export class StyleService {
  static setRowClass(val: rowClass): void {
    const selector = `#table > tbody > tr:nth-child(${val.row})`;
    const row: HTMLTableRowElement = document.querySelector(selector);
    if (row) {
      row.className = val.className;
    }
  }

  static setCellClass(val: cellClass): void {
    const selector = `#table > tbody > tr:nth-child(${val.row}) > td:nth-child(${val.cell})`;
    const cell: HTMLTableCellElement = document.querySelector(selector);
    if (cell) {
      cell.className = val.className;
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

  static setCellStyle(val: cellStyle): void {
    const selector = `#table > tbody > tr:nth-child(${val.row}) > td:nth-child(${val.cell})`;
    const cell: HTMLTableCellElement = document.querySelector(selector);
    if (cell) {
      // tslint:disable-next-line:no-string-literal
      cell.style[val.attr] = val.value;
    }
  }
}
