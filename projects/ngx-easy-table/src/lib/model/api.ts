export enum API {
  rowContextMenuClicked = 'rowContextMenuClicked',
  setInputValue = 'setInputValue',
  toolPanelClicked = 'toolPanelClicked',
  onGlobalSearch = 'onGlobalSearch',
  setPaginationCurrentPage = 'setPaginationCurrentPage',
  getPaginationCurrentPage = 'getPaginationCurrentPage',
  getPaginationTotalItems = 'getPaginationTotalItems',
  getPaginationLastPage = 'getPaginationLastPage',
  setPaginationRange = 'setPaginationRange',
  setPaginationPreviousLabel = 'setPaginationPreviousLabel',
  setPaginationNextLabel = 'setPaginationNextLabel',
  setTableClass = 'setTableClass',
  setRowClass = 'setRowClass',
  setCellClass = 'setCellClass',
  setRowStyle = 'setRowStyle',
  setCellStyle = 'setCellStyle',
}

export type rowClass = { row: number, className: string };
export type cellClass = { row: number, cell: number | string, className: string };
export type rowStyle = { row: number, attr: string, value: string };
export type cellStyle = { row: number, cell: number, attr: string, value: string };

export type ApiType =
  { type: API.rowContextMenuClicked; }
  | { type: API.setInputValue; value: Array<{ key: string, value: string }>; }
  | { type: API.toolPanelClicked; }
  | { type: API.onGlobalSearch; value: string; }
  | { type: API.setPaginationCurrentPage; value: number; }
  | { type: API.getPaginationCurrentPage; }
  | { type: API.getPaginationTotalItems; }
  | { type: API.getPaginationLastPage; }
  | { type: API.setPaginationRange; value: number[]; }
  | { type: API.setPaginationPreviousLabel; value: string; }
  | { type: API.setPaginationNextLabel; value: string; }
  | { type: API.setTableClass; value: string | null; }
  | { type: API.setRowClass; value: rowClass | rowClass[] }
  | { type: API.setCellClass; value: cellClass | cellClass[] }
  | { type: API.setRowStyle; value: rowStyle | rowStyle[] }
  | { type: API.setCellStyle; value: cellStyle | cellStyle[] }
  ;
