import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {EditemployeeComponent} from "./editemployee/editemployee.component";
import {SearchemployeeComponent} from "./searchemployee/searchemployee.component";
import {AddEmployeeComponent} from "./addemployee/addemployee.component";
import {EmployeeComponent} from "./employee.component";

const employeecomponentroutes: Routes = [
  {path: '', component: EmployeeComponent,
    children: [
      {path: 'addemployee', component: AddEmployeeComponent},
      {path: 'searchemployee', component: SearchemployeeComponent},
      {path: 'editemployee/:id', component: EditemployeeComponent}
    ]
  }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(employeecomponentroutes)
  ],
  exports:[RouterModule],
  declarations: [EmployeeComponent, AddEmployeeComponent, SearchemployeeComponent, EditemployeeComponent]
})
export class EmployeeModule { }
