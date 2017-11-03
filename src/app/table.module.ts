import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/base/base.component';
import { AppModule } from './components/base/base.module';

@NgModule({
  imports: [
    BrowserModule,
    AppModule,
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  providers: []
})
export class TableModule {
}
