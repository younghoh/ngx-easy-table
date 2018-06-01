export interface Config {
  searchEnabled: boolean;
  headerEnabled: boolean;
  orderEnabled: boolean;
  globalSearchEnabled: boolean;
  paginationEnabled: boolean;
  exportEnabled: boolean;
  clickEvent: boolean;
  selectRow: boolean;
  selectCol: boolean;
  selectCell: boolean;
  rows: number;
  additionalActions: boolean;
  serverPagination: boolean;
  isLoading: boolean;
  detailsTemplate: boolean;
  groupRows: boolean;
  paginationRangeEnabled: boolean;
  collapseAllRows: boolean;
  checkboxes: boolean;
  resizeColumn: boolean;
  fixedColumnWidth: boolean;
  horizontalScroll?: boolean;
  pinnedCol?: boolean;
  tableLayout?: {
    style: string,
    border: boolean,
    hover: boolean,
    striped: boolean,
  };
}
