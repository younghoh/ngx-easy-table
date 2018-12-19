export enum API {
  rowContextMenuClicked = 'rowContextMenuClicked',
  setInputValue = 'setInputValue',
  toolPanelClicked = 'toolPanelClicked',
  onGlobalSearch = 'onGlobalSearch',
}

interface RowContextMenuClicked {
  type: API.rowContextMenuClicked;
}

interface SetInputValue {
  type: API.setInputValue;
  value: Array<{
    key: string,
    value: string,
  }>;
}

interface ToolPanelClicked {
  type: API.toolPanelClicked;
}

interface OnGlobalSearch {
  type: API.onGlobalSearch;
  value: string;
}

export type ApiType = RowContextMenuClicked
  | SetInputValue
  | ToolPanelClicked
  | OnGlobalSearch
  ;
