import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {FiltersService} from "./services/filters-service";

bootstrap(AppComponent, [FiltersService]);