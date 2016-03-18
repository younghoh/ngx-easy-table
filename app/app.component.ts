import {Component} from 'angular2/core';
import {SearchPipe} from "./pipes/header-pipe";

@Component({
    selector: 'ng2-table',
    templateUrl: 'app/table.html',
    pipes: [SearchPipe]
})

export class AppComponent {
    public title = 'Dashboard';
    public Resource = Resource;
    public keys = keys;
}

const Resource = [
    {id: 1, name: "John Travolta", age: 12, created: "1987-09-08"},
    {id: 2, name: "Mick Jagger", age: 32, created: "1967-09-08"},
    {id: 3, name: "Hanna Montana", age: 42, created: "1957-09-08"},
    {id: 4, name: "Mikolai Copernicus", age: 52, created: "1927-09-08"},
    {id: 5, name: "Elon Musk", age: 62, created: "1937-09-08"},
];

const keys = Object.keys(Resource[0]);
