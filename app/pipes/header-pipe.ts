import {Pipe} from 'angular2/core';

@Pipe({
    name: 'search'
})

export class SearchPipe {
    transform(value, [term]) {
        if (typeof term === 'undefined') {
            return value;
        }
        return value.filter((item) => {
            return item.name.toLocaleLowerCase().indexOf(term) > -1 ? value : false;
        });
    }
}
