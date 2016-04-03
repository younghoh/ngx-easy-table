System.register(['angular2/core', "../../services/resource-service"], function(exports_1, context_1) {
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
    var core_1, resource_service_1;
    var Pagination;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (resource_service_1_1) {
                resource_service_1 = resource_service_1_1;
            }],
        execute: function() {
            Pagination = (function () {
                function Pagination(resource) {
                    var _this = this;
                    this.resource = resource;
                    this.updateRange = new core_1.EventEmitter();
                    this.pageNumber = 1;
                    this.range = 5;
                    this.pageNumbers = [];
                    resource_service_1.ResourceService.getPipedData().subscribe(function (data) {
                        _this.numberOfItems = data;
                        _this.updateNumberPerPage();
                    });
                }
                Pagination.prototype.emitPaginationProperties = function () {
                    this.updateRange.emit({ range: this.range, page: this.pageNumber });
                };
                Pagination.prototype.updateNumberPerPage = function () {
                    // issue #5
                    // if (this.range > this.numberOfItems && this.numberOfItems > 0) {
                    //   this.range = this.numberOfItems;
                    // }
                    var numberPerPage = Math.ceil(this.numberOfItems / this.range);
                    this.pageNumbers = Array(numberPerPage).fill().map(function (_, i) { return i + 1; });
                };
                Pagination.prototype.updatePagination = function () {
                    this.updateNumberPerPage();
                    this.emitPaginationProperties();
                };
                Pagination.prototype.isActiveRange = function (currentRange) {
                    return currentRange === this.range;
                };
                Pagination.prototype.isActivePage = function (currentPage) {
                    return currentPage === this.pageNumber;
                };
                Pagination.prototype.nextPage = function () {
                    if (!this.isLastPage()) {
                        this.pageNumber++;
                    }
                };
                Pagination.prototype.previousPage = function () {
                    if (!this.isFirstPage()) {
                        this.pageNumber--;
                    }
                };
                Pagination.prototype.isLastPage = function () {
                    return this.pageNumber === this.pageNumbers.length;
                };
                Pagination.prototype.isFirstPage = function () {
                    return this.pageNumber === 1;
                };
                Pagination.prototype.ngOnChanges = function () {
                    this.updatePagination();
                };
                Pagination.prototype.changeRange = function (number) {
                    this.range = number;
                    this.pageNumber = 1;
                    this.updatePagination();
                };
                Pagination.prototype.changePage = function (numberOfPage) {
                    this.pageNumber = numberOfPage;
                    this.updatePagination();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Pagination.prototype, "numberOfItems", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Pagination.prototype, "updateRange", void 0);
                Pagination = __decorate([
                    core_1.Component({
                        selector: 'pagination',
                        template: "\n<ul class=\"ng2-table__pagination\">\n    <li [class.disabled]=\"isFirstPage()\">\n        <a href=\"#\" (click)=\"previousPage()\">\u00AB</a>\n    </li>\n\n    <li *ngFor=\"#page of pageNumbers\" [class.active]=\"isActivePage(page)\">\n        <a href=\"#\" (click)=\"changePage(page)\">{{page}}</a>\n    </li>\n\n    <li [class.disabled]=\"isLastPage()\">\n        <a href=\"#\" (click)=\"nextPage()\">\u00BB</a>\n    </li>\n</ul>\n\n<ul class=\"ng2-table__items-per-page\">\n    <li [class.active]=\"isActiveRange(5)\"><a href=\"#\" (click)=\"changeRange(5)\"  class=\"btn btn-default\">5</a></li>\n    <li [class.active]=\"isActiveRange(10)\"><a href=\"#\" (click)=\"changeRange(10)\" class=\"btn btn-default\">10</a></li>\n    <li [class.active]=\"isActiveRange(25)\"><a href=\"#\" (click)=\"changeRange(25)\" class=\"btn btn-default\">25</a></li>\n    <li [class.active]=\"isActiveRange(50)\"><a href=\"#\" (click)=\"changeRange(50)\" class=\"btn btn-default\">50</a></li>\n    <li [class.active]=\"isActiveRange(100)\"><a href=\"#\" (click)=\"changeRange(100)\" class=\"btn btn-default\">100</a></li>\n</ul>\n"
                    }), 
                    __metadata('design:paramtypes', [resource_service_1.ResourceService])
                ], Pagination);
                return Pagination;
            }());
            exports_1("Pagination", Pagination);
        }
    }
});
