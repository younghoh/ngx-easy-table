import { Injectable } from '@angular/core';
import { ConfigService } from './config-service';

@Injectable()
export class LoggerService {

  constructor(private config: ConfigService) {
  }

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
