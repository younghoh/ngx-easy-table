export enum API {
  rowContextMenuClicked = 'rowContextMenuClicked',
  setInputValue = 'setInputValue',
  toolPanelClicked = 'toolPanelClicked',
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

export type ApiType = RowContextMenuClicked
  | SetInputValue
  | ToolPanelClicked
  ;
