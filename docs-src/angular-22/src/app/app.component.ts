import { Component, OnInit } from '@angular/core';
import { EXAMPLE_MENU, ExampleMenuItem } from './shared/example-menu';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  angularVersion = '22.1.3';
  packageVersion = '22.1.0';
  stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-data-table-angular-22?file=src%2Fapp%2Fexamples%2Fbasic%2Fbasic.component.ts&initialpath=%2Fbasic&startScript=start';
  activeExample = 'basic';
  examples: ExampleMenuItem[] = EXAMPLE_MENU;

  ngOnInit() {
    this.activeExample = this.getInitialExample();
  }

  setExample(example: string) {
    this.activeExample = example;

    if (window && window.location) {
      window.location.hash = '#/' + example;
    }
  }

  get selectedExample() {
    var i: number;

    for (i = 0; i < this.examples.length; i += 1) {
      if (this.examples[i].id === this.activeExample) {
        return this.examples[i];
      }
    }

    return this.examples[0];
  }

  private getInitialExample() {
    var hash = window && window.location ? window.location.hash : '';
    var path = window && window.location ? window.location.pathname : '';
    var id = hash || path;
    var i: number;

    if (id.indexOf('#/') === 0) {
      id = id.slice(2);
    } else if (id.indexOf('#') === 0) {
      id = id.slice(1);
    }

    if (id.indexOf('/') === 0) {
      id = id.slice(1);
    }

    if (id.indexOf('/') > -1) {
      id = id.split('/')[0];
    }

    for (i = 0; i < this.examples.length; i += 1) {
      if (this.examples[i].id === id) {
        return id;
      }
    }

    return 'basic';
  }
}
