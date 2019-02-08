import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Config } from '../..';
import { ConfigService } from '../../services/config-service';
import { PaginationControlsDirective } from 'ngx-pagination';

export interface PaginationRange {
  page: number;
  limit: number;
}

@Component({
  selector: 'pagination',
  templateUrl: './pagination.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @ViewChild('paginationDirective') paginationDirective: PaginationControlsDirective;
  @Input() pagination;
  @Input() config: Config;
  @Input() id;
  @Output() readonly updateRange: EventEmitter<PaginationRange> = new EventEmitter();
  public ranges: number[] = [5, 10, 25, 50, 100];
  public limit: number = ConfigService.config.rows;
  public showRange = false;
  public screenReaderPaginationLabel = 'Pagination';
  public screenReaderPageLabel = 'page';
  public screenReaderCurrentLabel = 'You are on page';
  public previousLabel = '';
  public nextLabel = '';
  public directionLinks = true;

  onPageChange(page: number): void {
    this.updateRange.emit({
      page,
      limit: this.limit,
    });
  }

  changeLimit(limit: number): void {
    this.showRange = !this.showRange;
    this.limit = limit;
    this.updateRange.emit({
      page: 1,
      limit,
    });
  }

}
