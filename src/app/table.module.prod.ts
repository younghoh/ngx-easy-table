import { NgModule } from '@angular/core';
import { AppComponent } from './components/base/base.component';
import { AppModule } from './components/base/base.module';
import { Level, NgLoggerModule } from '@nsalaun/ng-logger';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AppModule,
    NgLoggerModule.forRoot(Level.LOG)
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  providers: []
})
export class TableModule {
}
