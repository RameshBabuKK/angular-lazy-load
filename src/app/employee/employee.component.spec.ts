import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(EmployeeComponent);
    });

    it ('should be create', async(() => {
      expect(component).toBeTruthy();
    }));


  }));

});
