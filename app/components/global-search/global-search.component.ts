import {Component, OnInit, Output, EventEmitter} from "angular2/core";
@Component({
    selector: 'global-search',
    templateUrl: 'app///components/global-search/global-search.html'
})

export class GlobalSearch {
    @Output() globalUpdate = new EventEmitter();

}
