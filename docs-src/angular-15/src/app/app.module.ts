import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from '@revivejs/angular-data-table-component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, FormsModule, DataTableModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

