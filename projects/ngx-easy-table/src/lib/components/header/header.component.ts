import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Columns } from '../..';

@Component({
  selector: 'table-header',
  templateUrl: './header.html',
})

export class HeaderComponent {
  @Input() column: Columns;
  @Output() update = new EventEmitter();

  unifyKey(key: string): string {
    return key.replace('.', '_');
  }
}
