import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [RegisterEmployeeComponent, ViewComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [RegisterEmployeeComponent,ViewComponent],
})
export class EmployeeModule {}
