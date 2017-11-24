import { Injectable } from '@angular/core';

@Injectable()
export class ResourceService {
  public data: Array<any> = [];
  public key: string;
  public order: Array<any> = [];

  public sortBy(key: string): Array<any> {
    this.key = key;
    if (Object.keys(this.order).length === 0) {
      this.order[this.key] = 'asc';
    }
    if (this.order[this.key] === 'asc') {
      this.order = [];
      this.order[this.key] = 'desc';
      this.data.sort((a, b) => this.compare(a, b));
    } else {
      this.order = [];
      this.order[this.key] = 'asc';
      this.data.sort((a, b) => this.compare(b, a));
    }
    return this.data;
  }

  private compare(a: Array<any>, b: Array<any>): number {
    if ((isNaN(parseFloat(a[this.key])) || !isFinite(a[this.key])) || (isNaN(parseFloat(b[this.key])) || !isFinite(b[this.key]))) {
      if (a[this.key] + ''.toLowerCase() < b[this.key] + ''.toLowerCase()) {
        return -1;
      }
      if (a[this.key] + ''.toLowerCase() > b[this.key] + ''.toLowerCase()) {
        return 1;
      }
    } else {
      if (parseFloat(a[this.key]) < parseFloat(b[this.key])) {
        return -1;
      }
      if (parseFloat(a[this.key]) > parseFloat(b[this.key])) {
        return 1;
      }
    }

    return 0;
  }
}
