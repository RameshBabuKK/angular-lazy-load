import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { _ } from 'underscore';
import { IEmployee } from './employees';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private configUrl = 'assets/data/db.json';
  public employeeDetails;
  public EMP_KEY = 'item1';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  private extractData(res: Response) {
    const body = res;
    debugger;
    if (this.employeeDetails) {
      this.employeeDetails = this.employeeDetails;
    } else {
      this.employeeDetails = res[0].names;
    }
    return this.employeeDetails || { };
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  getEmpLocalstorage () {
    const res = JSON.parse(localStorage.getItem(this.EMP_KEY));
    return res;
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.configUrl).pipe(
      map(this.extractData));
  }

  addEmployee (newEmployee) {
    // console.log(newEmployee);
    this.employeeDetails = JSON.parse(this.getEmpLocalstorage());
    // console.log(this.employeeDetails);
    this.employeeDetails.push(newEmployee);
    // console.log(this.employeeDetails);
    this.setEmpLocalstorage(this.EMP_KEY, JSON.stringify(this.employeeDetails));
    return this.http.get(newEmployee).pipe(
      map(this.appendEmployee));
  }

  appendEmployee (res: Response) {
    const body = res;
    this.employeeDetails = res;
    return this.employeeDetails || { };
  }

  deleteEmployee(selectedIndex): Observable<any> {
    this.employeeDetails = JSON.parse(this.getEmpLocalstorage());

    /*Used for server side with URL*/
    /*return this.http.delete<any>(this.employeeDetails + ' /? ' + selectedIndex, httpOptions).pipe(
      tap(employees => console.log(`delete employees id=${selectedIndex}`)),
      catchError(this.handleError<any>('deleteemployees'))
    );*/

    const getEmpList = JSON.parse(this.getEmpLocalstorage());
    getEmpList.splice(selectedIndex, 1);
    this.employeeDetails = getEmpList;
    this.setEmpLocalstorage(this.EMP_KEY, JSON.stringify(this.employeeDetails));
    return this.employeeDetails;
  }

  getEmployee (id: number): Observable<any> {
    const getEmpList = JSON.parse(this.getEmpLocalstorage());
      /*Used for rest/server side with URL to get particular record*/
      /*return this.http.get<IEmployee[]>(this.configUrl + `/editemployee/` + id).pipe(
        map(this.extractData));*/
    this.employeeDetails = getEmpList;
    return of(this.employeeDetails[id]);
}

  updateEmployeeList (id, product): Observable<any> {
    const getEmpList = JSON.parse(this.getEmpLocalstorage());
    getEmpList.splice( id, 1 );
    Array.prototype.splice.apply(getEmpList, [id, product.length].concat(product));
    this.employeeDetails = getEmpList;
    this.setEmpLocalstorage(this.EMP_KEY, JSON.stringify(this.employeeDetails));
    return of(this.employeeDetails);
  }

  setEmpLocalstorage (key, employeeDetails) {
    localStorage.setItem(key, JSON.stringify(employeeDetails));
  }

}
