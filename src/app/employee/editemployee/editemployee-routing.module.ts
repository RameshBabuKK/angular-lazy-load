import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {EditemployeeComponent} from "./editemployee.component";

const searchcomponentroutes: Routes = [
  {path: ':id', component: EditemployeeComponent}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(searchcomponentroutes)
  ],
  exports: [RouterModule]
})
export class EditemployeeRoutingModule { }
export const EditemployeeRoutingComponents = [EditemployeeComponent];
