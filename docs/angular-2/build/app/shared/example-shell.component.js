System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ExampleShellComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ExampleShellComponent = (function () {
                function ExampleShellComponent() {
                    this.clear = new core_1.EventEmitter();
                }
                Object.defineProperty(ExampleShellComponent.prototype, "eventLogText", {
                    get: function () {
                        return (this.events || []).join('\n');
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], ExampleShellComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], ExampleShellComponent.prototype, "summary", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], ExampleShellComponent.prototype, "htmlSnippet", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], ExampleShellComponent.prototype, "tsSnippet", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], ExampleShellComponent.prototype, "dataSnippet", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], ExampleShellComponent.prototype, "events", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], ExampleShellComponent.prototype, "clear", void 0);
                ExampleShellComponent = __decorate([
                    core_1.Component({
                        selector: 'example-shell',
                        templateUrl: 'app/shared/example-shell.component.html',
                        styleUrls: ['app/shared/example-shell.component.css']
                    })
                ], ExampleShellComponent);
                return ExampleShellComponent;
            }());
            exports_1("ExampleShellComponent", ExampleShellComponent);
        }
    };
});
