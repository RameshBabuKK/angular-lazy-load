import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By} from '@angular/platform-browser';
import {SearchemployeeComponent} from "./searchemployee.component";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DebugElement} from "@angular/core";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";

describe('SearchemployeeComponent', () => {
  let component: SearchemployeeComponent;
  let fixture: ComponentFixture<SearchemployeeComponent>;
  let empservice: EmployeeService; let route: ActivatedRoute; let router: Router;
  let el: HTMLElement;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchemployeeComponent ],
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('should be create', () => {
    expect(component).toBeTruthy();
  });

  it ('should be set submitted to true', () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it ('should employees to be created', () => {
    expect(component.employees).toBeDefined();
  });

  it ('should employees list be greater than 0', () => {
    expect(component.employees.length).toBeGreaterThan(0);
  });


});
