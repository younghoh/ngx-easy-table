import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  getCompanies(params): Observable<Array<Company>> {
    return this.http
      .get<Array<Company>>(`https://simply-server.eu/company?${params}`);
  }
}

export interface Company {
  email: string;
  company: string;
  eyeColor: string;
  age: number;
  balance: string;
  surname: string;
  name: string;
  id: number;
}
