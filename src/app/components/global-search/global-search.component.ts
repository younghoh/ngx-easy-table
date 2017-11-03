import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'global-search',
  templateUrl: './global-search.html'
})

/**
 * @deprecated
 * Since I've added <ngx-table [data]="data" [filters]="filters"> globalSearch is not needed anymore
 * You can do your own search through "data" array and pass to the table.
 */
export class GlobalSearchComponent {
  @Output() globalUpdate = new EventEmitter();
}
