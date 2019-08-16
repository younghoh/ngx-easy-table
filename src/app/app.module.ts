import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from './ngx-easy-table/table.module';

@NgModule({
  imports: [
    BrowserModule,
    TableModule,
    FormsModule
  ],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
