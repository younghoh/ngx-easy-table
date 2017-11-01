import { Injectable } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { ConfigService } from './config-service';

@Injectable()
export class LoggerService {

  constructor(private config: ConfigService,
              private _logger: Logger) {
    this._logger.level = this.config.loggerLevel;
  }

  error(message?: any) {
    this._logger.error(message);
  }

  warn(message?: any) {
    this._logger.warn(message);
  }

  info(message?: any) {
    this._logger.info(message);
  }

  debug(message?: any) {
    this._logger.debug(message);
  }

  log(message?: any) {
    this._logger.log(message);
  }
}
