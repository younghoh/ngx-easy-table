import { HttpHeaders } from '@angular/common/http';

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
  httpHeaders: HttpHeaders;
  resourceUrl: string;
  rows: number;
  columns: string[];
  hiddenColumns: Set<string>;
  additionalActions: boolean;
}
