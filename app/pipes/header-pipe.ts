import {Pipe} from 'angular2/core';
import {FiltersService} from "../services/filters-service";

@Pipe({
    name: 'search'
})

export class SearchPipe {
    constructor(public filtersService:FiltersService) {
    }

    transform(value, [filters]) {
        if (typeof filters === 'undefined') {
            return value;
        }

        this.filtersService.update(filters.key, filters.value);
        let filtersArr = this.filtersService.get();
        var response = value.slice();

        value.forEach((item) => {
            for (var filterKey in filtersArr) {
                if (filtersArr.hasOwnProperty(filterKey)) {
                    let element;
                    if (typeof item[filterKey] === "string") {
                        element = item[filterKey].toLocaleLowerCase();
                    }
                    if (typeof item[filterKey] === "number") {
                        element = item[filterKey].toString();
                    }
                    if (element.indexOf(filtersArr[filterKey].toLocaleLowerCase()) === -1) {
                        response.splice(response.indexOf(item), 1);
                        return;
                    }
                }
            }
        });

        return response;
    }
}
