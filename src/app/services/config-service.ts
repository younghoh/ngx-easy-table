import { Injectable } from '@angular/core';
import { Config } from '../model/config';

@Injectable()
export class ConfigService {
  public static config: Config = {
    searchEnabled: true,
    headerEnabled: true,
    orderEnabled: true,
    globalSearchEnabled: true,
    paginationEnabled: true,
    clickEvent: true,
    selectRow: false,
    selectCol: false,
    selectCell: false,
    rows: 10,
    serverPagination: true,
    isLoading: true,
  };
}
