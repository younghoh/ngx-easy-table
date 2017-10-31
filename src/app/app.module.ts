import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TableComponent } from './app.component';
import { GlobalSearchComponent } from "./components/global-search/global-search.component";
import { CsvExportComponent } from "./components/dropdown/csv-export.component";
import { HeaderComponent } from "./components/header/header.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { SearchPipe } from "./pipes/header-pipe";
import { PaginationPipe } from "./pipes/pagination-pipe";
import { GlobalSearchPipe } from "./pipes/global-search-pipe";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TableComponent,
    GlobalSearchComponent,
    CsvExportComponent,
    HeaderComponent,
    PaginationComponent,
    SearchPipe,
    PaginationPipe,
    GlobalSearchPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  exports: [TableComponent],
  providers: [HttpClient],
  bootstrap: [TableComponent]
})
export class TableModule { }
