export enum API {
  rowContextMenuClicked = 'rowContextMenuClicked',
  setInputValue = 'setInputValue',
  toolPanelClicked = 'toolPanelClicked',
  onGlobalSearch = 'onGlobalSearch',
  setPaginationCurrentPage = 'setPaginationCurrentPage',
}

export type ApiType =
  { type: API.rowContextMenuClicked; }
  |
  {
    type: API.setInputValue;
    value: Array<{
      key: string,
      value: string,
    }>;
  }
  |
  { type: API.toolPanelClicked; }
  |
  { type: API.onGlobalSearch; value: string; }
  |
  { type: API.setPaginationCurrentPage; value: number; }
  ;
