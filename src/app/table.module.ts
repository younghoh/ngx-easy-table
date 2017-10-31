import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/app/app.component';
import { AppModule } from './components/app/app.module';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppModule
  ],
  bootstrap: [AppComponent]
})
export class TableModule { }
