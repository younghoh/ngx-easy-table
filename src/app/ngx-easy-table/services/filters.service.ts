import { Injectable } from '@angular/core';

@Injectable()
export class FiltersService {
  static getPath = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o);
}
