import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  static randomId(): number {
    // random pagination ID to avoid situation when we have more than 1 table at a page
    return Math.floor(Math.random() * 1000000);
  }
}
