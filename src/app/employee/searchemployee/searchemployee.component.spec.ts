import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SearchemployeeComponent} from "./searchemployee.component";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../employee.service";



describe('SearchemployeeComponent', () => {
  let component: SearchemployeeComponent;
  let fixture: ComponentFixture<SearchemployeeComponent>;
  let empservice: EmployeeService; let route: ActivatedRoute; let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
