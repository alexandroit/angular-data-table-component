import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { SourceFileService } from '../services/source-file.service';

@Component({
  standalone: false,
  selector: 'example-shell',
  templateUrl: './example-shell.component.html',
  styleUrls: ['./example-shell.component.css']
})
export class ExampleShellComponent implements OnChanges {
  @Input() title!: string;
  @Input() summary!: string;
  @Input() exampleId!: string;
  @Input() dataSnippet!: string;
  @Input() events!: string[];
  @Output() clear = new EventEmitter<any>();

  htmlSource = 'Loading HTML source...';
  tsSource = 'Loading TypeScript source...';
  private sourceRequestId = 0;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private sourceFiles: SourceFileService
  ) {}

  ngOnChanges() {
    this.loadSourceFiles();
  }

  get eventLogText() {
    return (this.events || []).join('\n');
  }

  private loadSourceFiles() {
    if (!this.exampleId || !this.sourceFiles) {
      return;
    }

    var requestId = ++this.sourceRequestId;
    this.htmlSource = 'Loading HTML source...';
    this.tsSource = 'Loading TypeScript source...';

    this.sourceFiles.loadExample(this.exampleId, (files) => {
      if (requestId !== this.sourceRequestId) {
        return;
      }

      this.htmlSource = files.html;
      this.tsSource = files.ts;
      this.changeDetector.detectChanges();
    });
  }
}
