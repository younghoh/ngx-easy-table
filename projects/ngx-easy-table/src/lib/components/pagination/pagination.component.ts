import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Config } from '../..';
import { DefaultConfigService } from '../../services/config-service';
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
  @ViewChild('paginationRange') paginationRange;
  @Input() pagination;
  @Input() config: Config;
  @Input() id;
  @Output() readonly updateRange: EventEmitter<PaginationRange> = new EventEmitter();
  public ranges: number[] = [5, 10, 25, 50, 100];
  public selectedLimit: number = DefaultConfigService.config.rows;
  public showRange = false;
  public screenReaderPaginationLabel = 'Pagination';
  public screenReaderPageLabel = 'page';
  public screenReaderCurrentLabel = 'You are on page';
  public previousLabel = '';
  public nextLabel = '';
  public directionLinks = true;

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.paginationRange.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.showRange = false;
    }
  }

  onPageChange(page: number): void {
    this.updateRange.emit({
      page,
      limit: this.selectedLimit,
    });
  }

  changeLimit(limit: number, callFromAPI: boolean): void {
    if (!callFromAPI) {
      this.showRange = !this.showRange;
    }
    this.selectedLimit = limit;
    this.updateRange.emit({
      page: 1,
      limit,
    });
  }
}
