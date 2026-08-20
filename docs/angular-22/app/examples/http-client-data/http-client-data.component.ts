import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableExampleBase } from '../../shared/table-example-base';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  standalone: false,
  selector: 'http-client-data-example',
  templateUrl: './http-client-data.component.html',
  styleUrls: ['./http-client-data.component.css']
})
export class HttpClientDataExampleComponent extends TableExampleBase implements OnInit {
  protected demoData = inject(TableDemoDataService);
  constructor(private http: HttpClient) {
    super();
  }

  title = 'HttpClient data';
  summary = 'Load rows through Angular HttpClient and pass them to the table as app-owned data.';
  orderColumns = this.demoData.getAdvancedColumns();
  orders: any[] = [];
  loading = false;
  errorMessage = '';

  ngOnInit() {
    this.loadRows();
  }

  loadRows() {
    this.loading = true;
    this.errorMessage = '';

    this.http.get<any[]>('assets/data/http-orders.json').subscribe(
      (rows) => {
        this.orders = rows || [];
        this.loading = false;
        this.record('http rows loaded', {
          rows: this.orders.length
        });
      },
      (error) => {
        this.loading = false;
        this.errorMessage = 'The HttpClient request failed.';
        this.record('http error', {
          status: error && error.status ? error.status : 'unknown'
        });
      }
    );
  }

  protected override getDataSnippet() {
    return this.demoData.dataSnippet({
      loading: this.loading,
      rows: this.orders.slice(0, 3)
    } as any);
  }
}
