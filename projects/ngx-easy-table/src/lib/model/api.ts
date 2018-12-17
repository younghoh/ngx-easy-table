export enum API {
  rowContextMenuClicked,
  toolPanelClicked,
}

export interface ApiType {
  type: API;
  value?: any | null;
}
