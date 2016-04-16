import {Component, OnInit, Output, EventEmitter} from "angular2/core";
@Component({
  selector: 'global-search',
  template: `
<label class="ng2-table__global-search-label" for="search">
    <input type="text"
           id="search"
           class="ng2-table__input"
           #input
           (input)="globalUpdate.emit({value: input.value})"
           placeholder="Search" />
</label>`,
  styles: [`
.ng2-table__global-search-label {
  border: 1px solid #f0f0f0;
  display: inline-block;
  margin: 6px 0;
  padding: 2px;
  width: 300px; }
  .ng2-table__global-search-label:before {
    content: '\f002';
    font-family: 'FontAwesome', sans-serif;
    left: 290px;
    position: absolute;
    top: 20px;
    z-index: 1; }
.ng2-table__input {
  border: 0;
  font-size: .9em;
  margin: 0;
  padding: 2px;
  width: 100%; }

`]
})

export class GlobalSearch {
  @Output() globalUpdate = new EventEmitter();
}
