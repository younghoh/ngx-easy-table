import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Columns } from '../..';

@Component({
  selector: 'table-header',
  template: `
    <label for="search_{{ unifyKey(column.key) }}">
      <input type="text"
             id="search_{{ unifyKey(column.key) }}"
             aria-label="Search"
             placeholder="{{ column.placeholder ? column.placeholder : column.title }}"
             class="ngx-table__header-search"
             #input
             (input)="update.emit({value: input.value, key: column.key})"
      >
    </label>`,
})

export class HeaderComponent {
  @Input() column: Columns;
  @Output() update = new EventEmitter();

  unifyKey(key: string): string {
    return key.replace('.', '_');
  }
}
