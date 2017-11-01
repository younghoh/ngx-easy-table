import { Level } from '@nsalaun/ng-logger';

export interface Config {
  searchEnabled: boolean;
  orderEnabled: boolean;
  globalSearchEnabled: boolean;
  footerEnabled: boolean;
  paginationEnabled: boolean;
  exportEnabled: boolean;
  editEnabled: boolean;
  clickEvent: boolean;
  selectRow: boolean;
  selectCol: boolean;
  selectCell: boolean;
  data: Array<Object>;
  resourceUrl: string;
  rows: number;
  columns: string[];
  hiddenColumns: Set<string>;
  additionalActions: boolean;
  loggerLevel: number | Level;
}
