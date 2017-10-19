import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'global-search',
  templateUrl: './global-search.html'
})

export class GlobalSearch {
  @Output() globalUpdate = new EventEmitter();
}
