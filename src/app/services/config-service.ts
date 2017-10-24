import { Injectable } from "@angular/core";
import { Config } from '../model/config';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigService implements Config {
  public searchEnabled = true;
  public orderEnabled = true;
  public globalSearchEnabled = true;
  public footerEnabled = false;
  public paginationEnabled = true;
  public exportEnabled = true;
  public editEnabled = false;
  public clickEvent = false;
  public selectRow = true;
  public selectCol = false;
  public selectCell = false;
  public data = [];
  public httpHeaders = new HttpHeaders();
  public resourceUrl = 'https://www.json-generator.com/api/json/get/ceVvFoDEeq';
  public rows = 10;
  public columns = [];
  public hiddenColumns = new Set([]);
  public additionalActions = false;
}
