import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, Output
} from '@angular/core';
import { ConfigService } from '../../services/config-service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PaginationComponent {
  @Input() pagination;
  @Output() updateRange = new EventEmitter();
  ranges = [5, 10, 25, 50, 100];
  limit = ConfigService.config.rows;
  showRange = false;

  onPageChange($event) {
    this.updateRange.emit({
      page: $event,
      limit: this.limit
    });
  }

  changeLimit(limit): void {
    this.showRange = !this.showRange;
    this.limit = limit;
    this.updateRange.emit({
      page: 1,
      limit: limit
    });
  }
}
