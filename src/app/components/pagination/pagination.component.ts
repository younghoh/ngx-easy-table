import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css'],
  providers: [PaginationService],
})

export class Pagination {
  @Input() numberOfItems: number = this.paginationService.numberOfItems;
  @Output() updateRange = new EventEmitter();

  constructor(public paginationService: PaginationService) {
    paginationService.updateRange$.subscribe(
      ev => {
        this.updateRange.emit(ev)
      });
  }
}
