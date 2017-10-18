import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'global-search',
  templateUrl: './global-search.html',
  styleUrls: ['./global-search.css']
})

export class GlobalSearch {
  @Output() globalUpdate = new EventEmitter();
}
