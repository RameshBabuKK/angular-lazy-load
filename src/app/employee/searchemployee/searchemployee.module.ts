import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SearchemployeeRoutingComponents, SearchemployeeRoutingModule} from "./searchemployee-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchemployeeRoutingModule
  ],
  declarations: [SearchemployeeRoutingComponents]
})
export class SearchemployeeModule { }
