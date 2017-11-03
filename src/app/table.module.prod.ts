import { NgModule } from '@angular/core';
import { AppComponent } from './components/base/base.component';
import { AppModule } from './components/base/base.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AppModule,
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  providers: []
})
export class TableModule {
}
