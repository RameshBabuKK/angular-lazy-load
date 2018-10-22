import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AddemployeeRoutingModule, AddEmpRoutingComponents} from "./addemployee-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddemployeeRoutingModule
  ],
  declarations: [AddEmpRoutingComponents]
})

export class AddemployeeModule { }
