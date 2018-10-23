import {Component, Input, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input() addEmpData = {id: null, name: '', surname: '', birthDate: '', phone: '', city: '', street: '', number: null};
  formgroup: FormGroup;
  constructor(private empservice: EmployeeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    //To do
  }

  addNewEmployee() {
    if (this.addEmpData.id && this.addEmpData.name) {
      this.empservice.addEmployee(this.addEmpData).subscribe((result) => {
        this.router.navigate(['employee/searchemployee']);
      }, (err) => {
        console.log(err);
      });
      // this.router.navigate(['/searchemployee']);
    }
  }
}
