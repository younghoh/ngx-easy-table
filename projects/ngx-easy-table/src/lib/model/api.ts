import { Subject, Subscription } from 'rxjs';

export enum API {
  rowContextMenuClicked = 'rowContextMenuClicked',
  setInputValue = 'setInputValue',
  toolPanelClicked = 'toolPanelClicked',
  onGlobalSearch = 'onGlobalSearch',
  setPaginationCurrentPage = 'setPaginationCurrentPage',
}

export class TableAPI {
  private readonly api = new Subject<ApiType>();

  subscribe(event: (type: ApiType) => void): Subscription {
    return this.api.subscribe(event);
  }

  set(event: ApiType) {
    this.api.next(event);
  }
}

export type ApiType = { type: API.rowContextMenuClicked; }
  | { type: API.setInputValue; value: Array<{ key: string, value: string }>; }
  | { type: API.toolPanelClicked; }
  | { type: API.onGlobalSearch; value: string; }
  | { type: API.setPaginationCurrentPage; value: number; }
  ;
