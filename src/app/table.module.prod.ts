import { NgModule } from '@angular/core';
import { BaseComponent } from './components/base/base.component';
import { BaseModule } from './components/base/base.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
  ],
  bootstrap: [BaseComponent],
  exports: [BaseComponent],
  providers: []
})
export class TableModule {
}
