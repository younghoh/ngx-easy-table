import {Component} from 'angular2/core';
import {Header} from "./header/header.component";
import {FiltersService} from "./services/filters-service";
import {SearchPipe} from "./pipes/header-pipe";

@Component({
    selector: 'ng2-table',
    templateUrl: 'app/table.html',
    directives: [Header],
    pipes: [SearchPipe]
})

export class AppComponent {
    constructor(public filtersService:FiltersService){}
    public Resource = Resource;
    public keys = keys;
}

const Resource = [
    {id: 1, uuid: "123e-324b-cd23", name: "John Travolta", age: 12, created: "1987-09-08"},
    {id: 2, uuid: "ee17-11e5-9ce9", name: "Mick Jagger", age: 32, created: "1967-09-08"},
    {id: 3, uuid: "b21b-4603-a67f", name: "Hanna Montana", age: 42, created: "1957-09-08"},
    {id: 4, uuid: "a8f4-4348-8ff1", name: "Mikolai Copernicus", age: 52, created: "1927-09-08"},
    {id: 5, uuid: "0fc8-4424-b50a", name: "Elon Musk", age: 62, created: "1937-09-08"},
];

const keys = Object.keys(Resource[0]);
