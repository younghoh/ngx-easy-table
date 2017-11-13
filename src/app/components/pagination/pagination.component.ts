import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChange,
  SimpleChanges
} from '@angular/core';
import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css'],
  providers: [PaginationService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PaginationComponent implements OnChanges {
  @Input() pagination;
  @Output() updateRange = new EventEmitter();

  constructor(public paginationService: PaginationService) {
    paginationService.updateRange$.subscribe(
      ev => {
        this.updateRange.emit(ev);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pagination.currentValue) {
      const count: number = changes.pagination.currentValue.count;
      const offset: number = changes.pagination.currentValue.offset;
      const limit: number = changes.pagination.currentValue.limit;
      this.paginationService.count = count;
      this.paginationService.offset = offset;
      this.paginationService.limit = limit;
      this.paginationService.updateNumberPerPage();
    }
  }
}
