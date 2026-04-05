import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableComponent } from './angular-data-table.component';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule],
  exports: [DataTableComponent]
})
export class DataTableModule {}

