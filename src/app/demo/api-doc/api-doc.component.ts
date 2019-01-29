import { Component } from '@angular/core';

@Component({
  selector: 'app-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.css'],
})
export class ApiDocComponent {
  public readonly apiDefinitionCode = `@ViewChild('table') table: BaseComponent;`;
  public readonly setInputValueCode = `this.table.set({
  type: API.setInputValue,
  value: [
      { key: 'age', value: '32' },
    ],
});`;

  public readonly setInputValueCode2 = `this.table.apiEvent({
  type: API.setInputValue,
  value: [
      { key: 'age', value: '32' },
      { key: 'company', value: 'Ko' },
    ],
});`;

  public readonly setInputValueCode3 = `this.table.apiEvent({
  type: API.setInputValue,
  value: [
      { key: 'age', value: '' },
      { key: 'company', value: '' },
    ],
});`;

  public readonly rowContextMenuClickedCode = `this.table.apiEvent({
  type: API.rowContextMenuClicked,
});`;

  public readonly toolPanelClickedCode = `this.table.apiEvent({
  type: API.toolPanelClicked,
});`;
}
