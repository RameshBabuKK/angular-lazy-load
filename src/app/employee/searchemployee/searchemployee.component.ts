import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})

export class SearchemployeeComponent implements OnInit {
  employees: any = [];
  public EMP_KEY = 'item1';
  constructor(
    private empservice: EmployeeService, private route: ActivatedRoute, private router: Router
  ) {}

  getEmployees() {
    this.employees = [];
    this.empservice.getEmployees().subscribe((data: {}) => {
      console.log(data);
      this.employees = data;

      this.setEmpLocalstorage(this.EMP_KEY, JSON.stringify(this.employees));
    });
  }

  setEmpLocalstorage (key, employeeDetails) {
    localStorage.setItem(key, JSON.stringify(employeeDetails));
  }

  ngOnInit() {
      this.getUpdateEmployeeList();
  }

  deleteEmployee(selectedIndex) {
    this.empservice.deleteEmployee(selectedIndex);
    this.getUpdateEmployeeList();
  }

  getUpdateEmployeeList () {
    const getEmpList = JSON.parse(this.empservice.getEmpLocalstorage());
    if (getEmpList) {
      this.employees = getEmpList;
    } else {
      this.getEmployees();
    }
  }

  /*Works with local storage and slice*/
  /*deleteEmployee (selectedIndex) {
    const getEmpList = JSON.parse(this.empservice.getEmpLocalstorage());
    getEmpList.splice(selectedIndex, 1);
    this.employees = getEmpList;
    this.setEmpLocalstorage(this.EMP_KEY, JSON.stringify(this.employees));
  }*/

  editEmployee (selectedIndex) {
    // const rr = this.empservice.getEmployee(selectedIndex);
    // console.log(rr);
    debugger;
    this.router.navigate(['/editemployee/' + selectedIndex]);
  }

}
