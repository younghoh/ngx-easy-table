import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { GlobalSearchComponent } from '../global-search/global-search.component';
import { GlobalSearchPipe } from '../../pipes/global-search-pipe';
import { SearchPipe } from '../../pipes/search-pipe';
import { HeaderComponent } from '../header/header.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { CsvExportComponent } from '../csv-export.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortPipe } from '../../pipes/sort.pipe';
import { RenderPipe } from '../../pipes/render-pipe';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

@NgModule({
  declarations: [
    BaseComponent,
    GlobalSearchComponent,
    CsvExportComponent,
    HeaderComponent,
    PaginationComponent,
    SearchPipe,
    RenderPipe,
    GlobalSearchPipe,
    SortPipe,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgxDnDModule
  ],
  exports: [BaseComponent]
})
export class BaseModule {
}
