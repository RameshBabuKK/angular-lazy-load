import {Component, OnInit, Input} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})

export class SearchemployeeComponent implements OnInit {
  @Input() empFormModel = {name: ''};

  employees: any = [];
  arr: any[]=[];
  public EMP_KEY = 'item1';
  name = new FormControl();
  submitted = false;
  constructor(private empservice: EmployeeService, private route: ActivatedRoute, private router: Router) {
  }


  getEmployees() {
    this.employees = [];
    this.empservice.getEmployees().subscribe((data: {}) => {
      console.log(data);
      this.employees = data;
      this.setEmpLocalstorage(this.EMP_KEY, JSON.stringify(this.employees));
    });
  }

  setEmpLocalstorage(key, employeeDetails) {
    localStorage.setItem(key, JSON.stringify(employeeDetails));
  }

  ngOnInit() {
    this.getUpdateEmployeeList();
  }

  deleteEmployee(selectedIndex) {
    this.empservice.deleteEmployee(selectedIndex).subscribe((result) => {
      this.getUpdateEmployeeList();
    }, (err) => {
      console.log(err);
    });
  }

  getUpdateEmployeeList() {
    const getEmpList = JSON.parse(this.empservice.getEmpLocalstorage());
    this.empFormModel.name = '';
    if (getEmpList) {
      this.employees = getEmpList;
    } else {
      this.getEmployees();
    }
  }

  editEmployee(selectedIndex) {
    this.router.navigate(['employee/editemployee/' + selectedIndex]);
  }

  onSubmit() {
    this.submitted = true;
    this.empservice.searchEmployeeFormData(this.empFormModel.name).subscribe((result) => {
      if (result) {
        this.employees = [];
        console.log(result);
        this.employees = result;
      } else {
        alert('No result found..')
      }
    });
  }

}
