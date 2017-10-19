[![npm version](https://badge.fury.io/js/ngx-easy-table.svg)](https://badge.fury.io/js/ngx-easy-table)
[![Build Status](https://travis-ci.org/ssuperczynski/ngx-easy-table.svg?branch=master)](https://travis-ci.org/ssuperczynski/ngx-easy-table)

### Live edit
<a href="https://stackblitz.com/edit/angular-2xhnud?embed=1&file=app/app.component.ts">
<img width="187" src="https://github.com/gothinkster/realworld/raw/master/media/edit_on_blitz.png?raw=true" style="max-width:100%;">
</a>

### Interactive demo

<a href="https://angular-2xhnud.stackblitz.io">
<img width="187" src="https://github.com/gothinkster/realworld/raw/master/media/edit_on_blitz.png?raw=true" style="max-width:100%;">
</a>

# Installation

`npm install ngx-easy-table --save`

### app.module.ts

```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TableModule} from 'ngx-easy-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

```

### app.component.html

```html
<ng2-table [configuration]="configuration"
           (event)="eventEmitted($event)">
</ng2-table>
```

### app.component.ts

```ts
import { Component } from '@angular/core';
import {ConfigurationService} from './configuration.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ConfigurationService],
})
export class AppComponent  {
  constructor(private configuration: ConfigurationService) {}
}

```


### config-service.ts:

```typescript
import { Injectable } from '@angular/core';
import { Config } from 'ngx-easy-table/app/model/config';

@Injectable()
export class ConfigurationService implements Config {
  public searchEnabled = false;
  public orderEnabled = true;
  public globalSearchEnabled = false;
  public footerEnabled = false;
  public paginationEnabled = false;
  public exportEnabled = false;
  public clickEvent = true;
  public selectRow = true;
  public selectCol = false;
  public selectCell = false;
  public resourceUrl = 'https://www.json-generator.com/api/json/get/ciRBhHznFK?indent=2';
  public rows = 10;
  public columns: string[] = [];
  public hiddenColumns = new Set([]);
}
```

# Screens

![table](https://i.imgur.com/WAt6fIy.png "table")

### Available config settings:

See https://github.com/ssuperczynski/ngx-easy-table/wiki

Proudly powered by 

[![Imgur](http://i.imgur.com/qbbb6ah.png)](http://espeo.eu/)
