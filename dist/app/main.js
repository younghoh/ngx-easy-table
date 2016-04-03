System.register(['angular2/http', 'angular2/platform/browser', "./app.component", "./services/filters-service", "./services/resource-service", "./services/config-service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, browser_1, app_component_1, filters_service_1, resource_service_1, config_service_1;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (filters_service_1_1) {
                filters_service_1 = filters_service_1_1;
            },
            function (resource_service_1_1) {
                resource_service_1 = resource_service_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                filters_service_1.FiltersService,
                resource_service_1.ResourceService,
                config_service_1.ConfigService,
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
