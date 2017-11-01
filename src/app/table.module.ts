import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/base/base.component';
import { AppModule } from './components/base/base.module';
import { Level, NgLoggerModule } from '@nsalaun/ng-logger';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppModule,
    NgLoggerModule.forRoot(Level.LOG)
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent],
  providers: []
})
export class TableModule {
}
