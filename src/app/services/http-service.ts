import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(public http: HttpClient) {
  }

  public getData(url: string, headers: HttpHeaders): Observable<any> {
    return this.http.get(url, { headers: headers });
  }
}
