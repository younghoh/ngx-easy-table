/// <reference path="../node_modules/@angular/typings/browser.d.ts" />
import {HTTP_PROVIDERS} from '@angular/http';
import {bootstrap}    from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {FiltersService} from "./services/filters-service";
import {ResourceService} from "./services/resource-service";
import {ConfigService} from "./services/config-service";

bootstrap(AppComponent, [
  FiltersService,
  ResourceService,
  ConfigService,
  HTTP_PROVIDERS
]);
