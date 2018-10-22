import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseComponent } from './components/base/base.component';
import { BaseModule } from './components/base/base.module';

@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    DragDropModule,
  ],
  bootstrap: [BaseComponent],
  exports: [BaseComponent],
  providers: [],
})
export class TableModule {
}
