import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'global-search',
  templateUrl: './global-search.html'
})

export class GlobalSearchComponent {
  @Output() globalUpdate = new EventEmitter();
}
