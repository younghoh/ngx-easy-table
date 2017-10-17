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
  resourceUrl: string;
  rows: number;
  columns: string[];
  hiddenColumns: Set<string>;
}
