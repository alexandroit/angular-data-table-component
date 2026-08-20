import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableComponent } from './angular-data-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DataTableComponent],
  exports: [DataTableComponent]
})
export class DataTableModule {}
