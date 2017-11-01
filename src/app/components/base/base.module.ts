import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './base.component';
import { PaginationPipe } from '../../pipes/pagination-pipe';
import { GlobalSearchComponent } from '../global-search/global-search.component';
import { GlobalSearchPipe } from '../../pipes/global-search-pipe';
import { CsvExportComponent } from '../dropdown/csv-export.component';
import { SearchPipe } from '../../pipes/header-pipe';
import { HeaderComponent } from '../header/header.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GlobalSearchComponent,
    CsvExportComponent,
    HeaderComponent,
    PaginationComponent,
    SearchPipe,
    PaginationPipe,
    GlobalSearchPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [HttpClient]
})
export class AppModule {
}
