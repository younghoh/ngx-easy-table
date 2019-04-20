import { Injectable } from '@angular/core';
import { rowClass, rowStyle, cellClass, cellStyle, columnClass } from '../model/api';

@Injectable()
export class StyleService {
  public static pinnedColumn = new Set<number>();

  static setRowClass(val: rowClass): void {
    const selector = `#table > tbody > tr:nth-child(${val.row})`;
    const row: HTMLTableRowElement = document.querySelector(selector);
    if (row) {
      row.className = val.className;
    }
  }

  static setColumnClass(val: columnClass): void {
    if (val.includeHeader) {
      const headerRows = document.querySelectorAll(`#table > thead tr > th:nth-child(${val.column})`);
      [].forEach.call(headerRows, (header) => {
        header.className = val.className;
      });
    }
    const columns = document.querySelectorAll(`#table > tbody tr > td:nth-child(${val.column})`);
    [].forEach.call(columns, (column) => {
      column.className = val.className;
    });
  }

  static setColumnPinned(column: number, pinned: boolean): void {
    if (column < 1) {
      console.error('Column number need to be 1 or greater');
      return;
    }
    this.updatePinnedColumns(column, pinned);
    const cols = document.querySelectorAll(`#table tr > td:nth-child(${column}),th:nth-child(${column})`);
    const lengths = document.querySelectorAll('#table tr:nth-child(1) > td');
    let leftMargin = 0;
    lengths.forEach((length, index) => {
      if (index < (column - 1)) {
        leftMargin = leftMargin + length.clientWidth;
      }
    });
    [].forEach.call(cols, (col: HTMLTableElement) => {
      if (pinned) {
        col.className = 'ngx-table__header-cell pinned-left';
        col.style.left = column > 1 ? `${leftMargin}px` : '0';
      } else {
        col.className = 'ngx-table__header-cell';
      }
    });
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

  private static updatePinnedColumns(column: number, pinned: boolean) {
    if (pinned) {
      StyleService.pinnedColumn.add(column);
    } else {
      StyleService.pinnedColumn.delete(column);
    }
  }
}
