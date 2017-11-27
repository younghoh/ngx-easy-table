import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  error(message?: any) {
    console.error(message);
  }

  warn(message?: any) {
    console.warn(message);
  }

  info(message?: any) {
    console.log(message);
  }

  debug(message?: any) {
    console.log(message);
  }

  log(message?: any) {
    console.log(message);
  }
}
