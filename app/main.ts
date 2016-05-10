///<reference path="./../typings/browser/ambient/es6-shim/index.d.ts"/>
import {HTTP_PROVIDERS} from '@angular/http';
import {bootstrap}    from '@angular/platform-browser-dynamic';
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
