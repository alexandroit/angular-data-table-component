System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TableExampleBase;
    return {
        setters: [],
        execute: function () {
            TableExampleBase = (function () {
                function TableExampleBase() {
                    this.events = ['Ready'];
                }
                Object.defineProperty(TableExampleBase.prototype, "dataSnippet", {
                    get: function () {
                        return this.getDataSnippet();
                    },
                    enumerable: true,
                    configurable: true
                });
                TableExampleBase.prototype.record = function (type, value) {
                    var text = type + ': ' + this.safeJson(value);
                    this.events.unshift(text.length > 220 ? text.slice(0, 220) + '...' : text);
                    this.events = this.events.slice(0, 8);
                };
                TableExampleBase.prototype.clearEvents = function () {
                    this.events = ['Ready'];
                };
                TableExampleBase.prototype.getDataSnippet = function () {
                    return '[]';
                };
                TableExampleBase.prototype.safeJson = function (value) {
                    try {
                        return JSON.stringify(value);
                    }
                    catch (error) {
                        return String(value);
                    }
                };
                return TableExampleBase;
            }());
            exports_1("TableExampleBase", TableExampleBase);
        }
    };
});
