import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { GlobalSearchComponent } from '../global-search/global-search.component';
import { GlobalSearchPipe } from '../../pipes/global-search-pipe';
import { SearchPipe } from '../../pipes/header-pipe';
import { HeaderComponent } from '../header/header.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CsvExportComponent } from '../csv-export.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    BaseComponent,
    GlobalSearchComponent,
    CsvExportComponent,
    HeaderComponent,
    PaginationComponent,
    SearchPipe,
    GlobalSearchPipe
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [BaseComponent]
})
export class BaseModule {
}
