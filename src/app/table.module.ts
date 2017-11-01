import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/base/base.component';
import { AppModule } from './components/base/base.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppModule
  ],
  bootstrap: [AppComponent]
})
export class TableModule { }
