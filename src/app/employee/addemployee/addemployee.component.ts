import {Component, Input, OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input() addEmpData = { id: null, name: '', surname: '', birthDate: '', phone: '', city: '', street: '', number: null };
  constructor(private empservice: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addNewEmployee() {
    if (this.addEmpData.id && this.addEmpData.name) {
      this.empservice.addEmployee(this.addEmpData);
      this.router.navigate(['/searchemployee']);
    }
  }
}
