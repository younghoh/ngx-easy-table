[![npm version](https://badge.fury.io/js/ngx-easy-table.svg)](https://badge.fury.io/js/ngx-easy-table)
[![Build Status](https://travis-ci.org/ssuperczynski/ng2-easy-table.svg?branch=master)](https://travis-ci.org/ssuperczynski/ng2-easy-table)

Proudly powered by [![Imgur](http://i.imgur.com/qbbb6ah.png)](http://espeo.eu/)

Beta version. Component may contains some issues, but feel free to add it to your page!

<h3><a href="http://angular2-table.espeo.pl/" target="_blank">DEMO</a></h3>

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
<ng2-table [configuration]="configuration"></ng2-table>
```

### config-service.ts:

```typescript
import {Injectable} from "@angular/core";
@Injectable()
export class ConfigService {
  public searchEnabled = false;
  public orderEnabled = true;
  public globalSearchEnabled = false;
  public footerEnabled = false;
  public paginationEnabled = false;
  public exportEnabled = false;
  resourceUrl: 'http://www.mocky.io/v2/59d5129e270000bf009cd582',
  public rows = 10;
}
```

# Screens

![table](http://i.imgur.com/yqlYtVR.png "table")

### Available config settings:

| field               |      type      |  options   | example                                     |
|---------------------|:--------------:|:----------:|---------------------------------------------|
| searchEnabled       | bool           | true false | public searchEnabled = true;                |
| exportEnabled       | bool           | true false | public exportEnabled = true;                |
| orderEnabled        | bool           | true false | public orderEnabled = true;                 |
| paginationEnabled   | bool           | true false | public paginationEnabled = true;            |
| globalSearchEnabled | bool           | true false | public globalSearchEnabled = true;          |
| resourceUrl         | string         |            | public resourceUrl = "api/v1/persons.json"; |
| rows                | int            |            | public rows = 10;                           |
