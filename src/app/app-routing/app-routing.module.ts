import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { DepartmentListComponent } from '../department/department-list/department-list.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from '../employee/addemployee/addemployee.component';
import { EditemployeeComponent } from '../employee/editemployee/editemployee.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { SearchemployeeComponent } from '../employee/searchemployee/searchemployee.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'addemployee', component: AddEmployeeComponent},
  {path: 'searchemployee', component: SearchemployeeComponent},
  {path: 'editemployee/:id', component: EditemployeeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [HomeComponent, NavbarComponent, DepartmentListComponent,
  EmployeeListComponent, AddEmployeeComponent, EditemployeeComponent, AboutUsComponent, SearchemployeeComponent, PageNotFoundComponent];

