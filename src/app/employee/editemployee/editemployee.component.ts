import {Component, OnInit, Input} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  private employees: any = [];
  @Input() addEmpData = {id: null, name: '', surname: '', birthDate: '', phone: '', city: '', street: '', number: null};

  constructor(private empservice: EmployeeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.empservice.getEmployee(this.route.snapshot.params['id']).subscribe((data: {}) => {
      this.employees = data;
    });
  }

  updateEmployee() {
    this.empservice.updateEmployeeList(this.route.snapshot.params['id'], this.employees).subscribe((result) => {
      this.router.navigate(['employee/searchemployee']);
    }, (err) => {
      console.log(err);
    });
  }
}

