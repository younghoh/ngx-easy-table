import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { PaginationPipe } from '../../pipes/pagination-pipe';
import { GlobalSearchComponent } from '../global-search/global-search.component';
import { GlobalSearchPipe } from '../../pipes/global-search-pipe';
import { SearchPipe } from '../../pipes/header-pipe';
import { HeaderComponent } from '../header/header.component';
import { PaginationComponent } from '../pagination/pagination.component';

@NgModule({
  declarations: [
    BaseComponent,
    GlobalSearchComponent,
    HeaderComponent,
    PaginationComponent,
    SearchPipe,
    PaginationPipe,
    GlobalSearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [BaseComponent],
})
export class BaseModule {
}
