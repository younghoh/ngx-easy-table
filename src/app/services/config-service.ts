import { Injectable } from '@angular/core';
import { Config } from '../model/config';

@Injectable()
export class ConfigService implements Config {
  public searchEnabled = true;
  public headerEnabled = true;
  public orderEnabled = true;
  public globalSearchEnabled = true;
  public paginationEnabled = true;
  public clickEvent = true;
  public selectRow = false;
  public selectCol = false;
  public selectCell = false;
  public rows = 10;
}
