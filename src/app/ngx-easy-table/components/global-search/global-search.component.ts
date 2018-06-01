import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'global-search',
  templateUrl: './global-search.html'
})

/**
 * Since version 5.0 GlobalSearchComponent will be moved to GlobalSearchComponent plugin
 */
export class GlobalSearchComponent {
  @Output() globalUpdate = new EventEmitter();
}
