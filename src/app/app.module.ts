import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee/employee.service';
import { AppRoutingModule, RoutingComponents } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import {Grid} from 'ag-grid-community';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([AppComponent])
  ],

  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
