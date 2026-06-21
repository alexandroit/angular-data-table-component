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
                        template: "\n    <article class=\"example-card\">\n      <div class=\"example-head\">\n        <div class=\"example-title\">\n          <p class=\"eyebrow\">Live preview</p>\n          <h2>{{ title }}</h2>\n          <p>{{ summary }}</p>\n        </div>\n        <span class=\"status-pill\">Angular 2.4.10</span>\n      </div>\n\n      <div class=\"preview\">\n        <ng-content></ng-content>\n      </div>\n\n      <div class=\"event-log\">\n        <div>\n          <h3>Event log</h3>\n          <p>Latest component outputs from this Angular 2 live app.</p>\n        </div>\n        <button type=\"button\" (click)=\"clear.emit(null)\">Clear</button>\n        <pre>{{ eventLogText }}</pre>\n      </div>\n\n      <div class=\"code-grid\">\n        <div class=\"code-panel\">\n          <h3>HTML</h3>\n          <pre>{{ htmlSnippet }}</pre>\n        </div>\n        <div class=\"code-panel\">\n          <h3>TS</h3>\n          <pre>{{ tsSnippet }}</pre>\n        </div>\n        <div class=\"code-panel\">\n          <h3>Data</h3>\n          <pre>{{ dataSnippet }}</pre>\n        </div>\n      </div>\n    </article>\n  "
                    })
                ], ExampleShellComponent);
                return ExampleShellComponent;
            }());
            exports_1("ExampleShellComponent", ExampleShellComponent);
        }
    };
});
