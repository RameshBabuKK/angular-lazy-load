import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponent } from './addemployee.component';
import {AddemployeeRoutingModule} from "./addemployee-routing.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ],
      imports: [
        CommonModule,
        FormsModule,
        AddemployeeRoutingModule
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AddEmployeeComponent);
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
