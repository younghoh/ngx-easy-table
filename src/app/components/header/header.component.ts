import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-header',
  template: `
    <label for="search_{{ column['key'] }}">
      <input type="text"
             id="search_{{ column['key'] }}"
             aria-label="Search"
             placeholder="Search {{ column['key'] }}"
             class="ngx-table__header-search ngx-form-input ngx-input-sm"
             #input
             (input)="update.emit({value: input.value, key: column['key']})"
      >
    </label>`
})

export class HeaderComponent {
  @Input() column;
  @Output() update = new EventEmitter();
}
