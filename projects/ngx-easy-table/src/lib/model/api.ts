import { Observable, of, Subject, Subscription } from 'rxjs';
import { PaginationControlsDirective } from 'ngx-pagination';

export enum API {
  rowContextMenuClicked = 'rowContextMenuClicked',
  setInputValue = 'setInputValue',
  toolPanelClicked = 'toolPanelClicked',
  onGlobalSearch = 'onGlobalSearch',
  setPaginationCurrentPage = 'setPaginationCurrentPage',
  getPaginationCurrentPage = 'getPaginationCurrentPage',
  getPaginationTotalItems = 'getPaginationTotalItems',
  getPaginationLastPage = 'getPaginationLastPage',
}

export type ApiType = { type: API.rowContextMenuClicked; }
  | { type: API.setInputValue; value: Array<{ key: string, value: string }>; }
  | { type: API.toolPanelClicked; }
  | { type: API.onGlobalSearch; value: string; }
  | { type: API.setPaginationCurrentPage; value: number; }
  | { type: API.getPaginationCurrentPage; }
  | { type: API.getPaginationTotalItems; }
  | { type: API.getPaginationLastPage; }
  ;

export class TableAPI {
  public paginationComponent: PaginationControlsDirective;
  private readonly api = new Subject<ApiType>();

  subscribe(event: (type: ApiType) => void): Subscription {
    return this.api.subscribe(event);
  }

  set(event: ApiType): Observable<boolean | number | void> {
    switch (event.type) {
      case API.getPaginationCurrentPage:
        return of(this.paginationComponent.getCurrent());
      case API.getPaginationTotalItems:
        return of(this.paginationComponent.getTotalItems());
      case API.getPaginationLastPage:
        return of(this.paginationComponent.getLastPage());
      case API.setPaginationCurrentPage:
        return of(this.paginationComponent.setCurrent(event.value));
      case API.rowContextMenuClicked:
      case API.setInputValue:
      case API.toolPanelClicked:
      case API.onGlobalSearch:
        return of(this.api.next(event));
      default:
        console.error('Unrecognized API event');
    }
  }
}
