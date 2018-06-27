import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit,
} from '@angular/core';
import { ConfigService } from '../../services/config-service';
import { Config } from '../../model/config';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.html',
  styles: [
      `
      :host /deep/ #pagination-controls > pagination-template > ul {
        -webkit-padding-start: 0px;
        -webkit-margin-before: 7px;
      }
      :host /deep/ #pagination-controls > pagination-template > ul > li {
        border: 1px solid #e7e9ed;
      }
      :host /deep/ #pagination-controls > pagination-template > ul > li.current {
        border: 1px solid #a4c2ff;
      }
      :host /deep/ #pagination-controls > pagination-template > ul > li > a {
        color: #50596c;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PaginationComponent implements OnInit {
  @Input() pagination;
  @Input() id;
  @Output() updateRange = new EventEmitter();
  public config: Config;
  public ranges = [5, 10, 25, 50, 100];
  public limit = ConfigService.config.rows;
  public showRange = false;

  onPageChange($event) {
    this.updateRange.emit({
      page: $event,
      limit: this.limit,
    });
  }

  changeLimit(limit): void {
    this.showRange = !this.showRange;
    this.limit = limit;
    this.updateRange.emit({
      page: 1,
      limit: limit,
    });
  }

  ngOnInit() {
    this.config = ConfigService.config;
  }
}
