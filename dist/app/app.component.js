System.register(['angular2/core', "./services/filters-service", "./pipes/header-pipe", "./pipes/pagination-pipe", "./components/header/header.component", "./components/pagination/pagination.component", "./services/config-service", "./services/resource-service", "./services/http-service", 'rxjs/add/operator/map', "./components/global-search/global-search.component", "./pipes/global-search-pipe", "./components/dropdown/csv-export.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, filters_service_1, header_pipe_1, pagination_pipe_1, header_component_1, pagination_component_1, config_service_1, resource_service_1, http_service_1, global_search_component_1, global_search_pipe_1, csv_export_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (filters_service_1_1) {
                filters_service_1 = filters_service_1_1;
            },
            function (header_pipe_1_1) {
                header_pipe_1 = header_pipe_1_1;
            },
            function (pagination_pipe_1_1) {
                pagination_pipe_1 = pagination_pipe_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (resource_service_1_1) {
                resource_service_1 = resource_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (_1) {},
            function (global_search_component_1_1) {
                global_search_component_1 = global_search_component_1_1;
            },
            function (global_search_pipe_1_1) {
                global_search_pipe_1 = global_search_pipe_1_1;
            },
            function (csv_export_component_1_1) {
                csv_export_component_1 = csv_export_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(filtersService, config, resource, httpService) {
                    var _this = this;
                    this.filtersService = filtersService;
                    this.config = config;
                    this.resource = resource;
                    this.httpService = httpService;
                    this.numberOfItems = 0;
                    this.itemsObservables = httpService.getData();
                    this.itemsObservables.subscribe(function (res) {
                        _this.data = res;
                        _this.numberOfItems = res.length;
                        _this.keys = Object.keys(_this.data[0]);
                        _this.resource.keys = _this.keys;
                    });
                }
                AppComponent.prototype.orderBy = function (key) {
                    this.data = this.resource.sortBy(key);
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ng2-table',
                        bindings: [http_service_1.HttpService],
                        directives: [header_component_1.Header, pagination_component_1.Pagination, global_search_component_1.GlobalSearch, csv_export_component_1.CsvExport],
                        pipes: [header_pipe_1.SearchPipe, pagination_pipe_1.PaginationPipe, global_search_pipe_1.GlobalSearchPipe],
                        providers: [filters_service_1.FiltersService, resource_service_1.ResourceService, config_service_1.ConfigService],
                        template: "\n  <global-search\n        *ngIf=\"config.globalSearchEnabled\"\n        (globalUpdate)=\"globalSearchTerm = $event\">\n</global-search>\n<csv-export *ngIf=\"config.exportEnabled\"></csv-export>\n\n<table class=\"ng2-table__table--striped\">\n    <thead>\n    <tr>\n        <th [style.display]=\"config.orderEnabled?'':'none' \"\n            *ngFor=\"#key of keys\"\n            (click)=\"orderBy(key)\">\n            {{ key }}\n            <span *ngIf=\"resource.order[key]==='asc' \" class=\"ng2-table__sort-indicator fa fa-chevron-down\"></span>\n            <span *ngIf=\"resource.order[key]==='desc' \" class=\"ng2-table__sort-indicator fa fa-chevron-up\"></span>\n        </th>\n        <th [style.display]=\"!config.orderEnabled?'':'none' \"\n            *ngFor=\"#key of keys\">\n            {{ key }}\n        </th>\n        <th>Actions</th>\n    </tr>\n    <tr *ngIf=\"config.searchEnabled\">\n        <th *ngFor=\"#key of keys\">\n            <table-header (update)=\"term = $event\" [key]=\"key\"></table-header>\n        </th>\n        <th></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"#row of data | search : term | global : globalSearchTerm | pagination : range\">\n        <td *ngFor=\"#key of keys\">\n            {{ row[key] }}\n        </td>\n        <td>\n            <button class=\"ng2-table__button\">Edit</button>\n        </td>\n    </tr>\n    </tbody>\n    <tfoot *ngIf=\"config.footerEnabled\">\n    <tr>\n        <td *ngFor=\"#key of keys\"></td>\n        <td></td>\n    </tr>\n    </tfoot>\n</table>\n\n<pagination [numberOfItems]=\"numberOfItems\" (updateRange)=\"range = $event\"></pagination>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [filters_service_1.FiltersService, config_service_1.ConfigService, resource_service_1.ResourceService, http_service_1.HttpService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
