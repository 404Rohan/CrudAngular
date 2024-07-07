import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css'],
})
export class RegisterEmployeeComponent implements OnInit, OnChanges {
  constructor(public es: EmployeeService, private fb: FormBuilder) {}
  emmployeeForm: FormGroup;
  @Input() empdata: Employee;
  flag: boolean = false;
  ngOnInit(): void {
    this.emmployeeForm = this.fb.group({
      id: [0],
      empName: [],
      empSalary: [],
      empAge: [],
    });
  }
  ngOnChanges() {
    if (this.emmployeeForm != null) {
      this.emmployeeForm.patchValue(this.empdata);
    }
    if (this.empdata != null) {
      this.flag = true;
    }
  }
  emp: Employee[];

  onsubmitEmp() {
    if (this.flag) {
      this.es.updateEmp(this.emmployeeForm.value).subscribe();
    } else {
      this.es.savedata(this.emmployeeForm.value).subscribe((u: Employee[]) => {
        this.emp = u;
      });
    }
    window.location.reload();
  }
}
