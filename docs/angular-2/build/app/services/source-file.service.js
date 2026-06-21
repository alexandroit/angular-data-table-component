System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, SourceFileService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            SourceFileService = (function () {
                function SourceFileService() {
                    this.sourceRoot = 'app';
                }
                SourceFileService.prototype.loadExample = function (exampleId, done) {
                    var exampleRoot = this.sourceRoot + '/examples/' + exampleId + '/' + exampleId;
                    var pendingFiles = 2;
                    var files = {
                        html: 'Loading HTML source...',
                        ts: 'Loading TypeScript source...'
                    };
                    var finish = function () {
                        pendingFiles -= 1;
                        if (pendingFiles === 0) {
                            done(files);
                        }
                    };
                    this.read(exampleRoot + '.component.html', function (html) {
                        files.html = html;
                        finish();
                    });
                    this.read(exampleRoot + '.component.ts', function (ts) {
                        files.ts = ts;
                        finish();
                    });
                };
                SourceFileService.prototype.read = function (url, done) {
                    var request = new XMLHttpRequest();
                    request.onreadystatechange = function () {
                        if (request.readyState !== 4) {
                            return;
                        }
                        if (request.status >= 200 && request.status < 300) {
                            done(request.responseText);
                            return;
                        }
                        done('Unable to load source file: ' + url);
                    };
                    request.open('GET', url, true);
                    request.send();
                };
                SourceFileService = __decorate([
                    core_1.Injectable()
                ], SourceFileService);
                return SourceFileService;
            }());
            exports_1("SourceFileService", SourceFileService);
        }
    };
});
