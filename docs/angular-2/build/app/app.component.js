System.register(["@angular/core", "./shared/example-menu"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, example_menu_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (example_menu_1_1) {
                example_menu_1 = example_menu_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                    this.angularVersion = '2.4.10';
                    this.packageVersion = '2.0.0';
                    this.stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-data-table-angular-2?file=src%2Fapp%2Fexamples%2Fbasic%2Fbasic.component.ts&initialpath=%2Fbasic&startScript=start';
                    this.activeExample = 'basic';
                    this.examples = example_menu_1.EXAMPLE_MENU;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.activeExample = this.getInitialExample();
                };
                AppComponent.prototype.setExample = function (example) {
                    this.activeExample = example;
                    if (window && window.location) {
                        window.location.hash = '#/' + example;
                    }
                };
                Object.defineProperty(AppComponent.prototype, "selectedExample", {
                    get: function () {
                        var i;
                        for (i = 0; i < this.examples.length; i += 1) {
                            if (this.examples[i].id === this.activeExample) {
                                return this.examples[i];
                            }
                        }
                        return this.examples[0];
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent.prototype.getInitialExample = function () {
                    var hash = window && window.location ? window.location.hash : '';
                    var id = hash;
                    var i;
                    if (id.indexOf('#/') === 0) {
                        id = id.slice(2);
                    }
                    else if (id.indexOf('#') === 0) {
                        id = id.slice(1);
                    }
                    if (id.indexOf('/') === 0) {
                        id = id.slice(1);
                    }
                    for (i = 0; i < this.examples.length; i += 1) {
                        if (this.examples[i].id === id) {
                            return id;
                        }
                    }
                    return 'basic';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'stackline-test',
                        templateUrl: 'app/app.component.html'
                    })
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
