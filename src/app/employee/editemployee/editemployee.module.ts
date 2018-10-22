import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {EditemployeeRoutingComponents, EditemployeeRoutingModule} from "./editemployee-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EditemployeeRoutingModule
  ],
  declarations: [EditemployeeRoutingComponents]
})
export class EditemployeeModule { }
