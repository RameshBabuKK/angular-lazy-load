import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DepartmentListComponent} from "./department/department-list/department-list.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NavbarComponent} from "./navbar/navbar.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'employee', loadChildren: './employee/employee.module#EmployeeModule'},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [HomeComponent, NavbarComponent, DepartmentListComponent, AboutUsComponent, PageNotFoundComponent];

