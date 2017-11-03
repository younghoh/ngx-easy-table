import { Level } from '@nsalaun/ng-logger';

export interface Config {
  searchEnabled: boolean;
  headerEnabled: boolean;
  orderEnabled: boolean;
  globalSearchEnabled: boolean;
  paginationEnabled: boolean;
  clickEvent: boolean;
  selectRow: boolean;
  selectCol: boolean;
  selectCell: boolean;
  rows: number;
  loggerLevel: number | Level;
}
