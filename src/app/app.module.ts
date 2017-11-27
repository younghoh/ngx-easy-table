import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from './ngx-easy-table/table.module';

@NgModule({
  imports: [
    BrowserModule,
    TableModule
  ],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
