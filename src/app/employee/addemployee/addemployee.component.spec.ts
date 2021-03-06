import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponent } from './addemployee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ],
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AddEmployeeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  }));



});
