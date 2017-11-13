import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BaseComponent } from './components/base/base.component';
import { BaseModule } from './components/base/base.module';

@NgModule({
  imports: [
    BrowserModule,
    BaseModule,
  ],
  bootstrap: [BaseComponent],
  exports: [BaseComponent],
  providers: []
})
export class TableModule {
}
