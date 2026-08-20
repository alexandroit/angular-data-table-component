import { Injectable } from '@angular/core';

export interface ExampleSourceFiles {
  html: string;
  ts: string;
}

@Injectable()
export class SourceFileService {
  private sourceRoot = 'app';

  loadExample(exampleId: string, done: (files: ExampleSourceFiles) => void) {
    var exampleRoot = this.sourceRoot + '/examples/' + exampleId + '/' + exampleId;
    var pendingFiles = 2;
    var files: ExampleSourceFiles = {
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
  }

  private read(url: string, done: (source: string) => void) {
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
  }
}
