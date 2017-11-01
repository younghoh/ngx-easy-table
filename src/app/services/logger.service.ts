import { Injectable } from '@angular/core';
import { ConfigService } from './config-service';
import { Logger } from '@nsalaun/ng-logger';

@Injectable()
export class LoggerService {
  _logger: Logger;

  constructor(private config: ConfigService) {
    this._logger = new Logger(this.config.loggerLevel);
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
