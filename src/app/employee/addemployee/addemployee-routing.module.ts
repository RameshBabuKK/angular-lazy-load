import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddEmployeeComponent} from './addemployee.component';

const addemployeeroutes: Routes = [
  {path: '', component: AddEmployeeComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(addemployeeroutes)
  ],
  exports: [RouterModule]
})
export class AddemployeeRoutingModule { }
export const AddEmpRoutingComponents = [AddEmployeeComponent];

