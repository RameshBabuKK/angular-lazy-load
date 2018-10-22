import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SearchemployeeComponent} from "./searchemployee.component";

const searchcomponentroutes: Routes = [
  {path: '', component: SearchemployeeComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(searchcomponentroutes)
  ],
  exports: [RouterModule]
})
export class SearchemployeeRoutingModule { }
export const SearchemployeeRoutingComponents = [SearchemployeeComponent];
