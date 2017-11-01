import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/base/base.component';
import { AppModule } from './components/base/base.module';
import { Logger } from 'angular2-logger/core';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppModule
  ],
  bootstrap: [AppComponent],
  providers: [Logger]
})
export class TableModule { }
