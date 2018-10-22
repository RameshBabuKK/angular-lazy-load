import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import {Grid} from 'ag-grid-community';
import {AppRoutingModule, RoutingComponents} from "./app-routing.module";
import {EmployeeService} from "./employee/employee.service";

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([AppComponent])
  ],

  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
