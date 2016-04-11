import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Observable} from "rxjs/Observable";
@Injectable()
export class HttpService {
  constructor(public http:Http) {}

  public getData(url: string): Observable<any> {
    return this.http.get(url)
      .map((responseData) => {
        return responseData.json();
      });
  }
}
