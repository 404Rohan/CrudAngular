import { Component } from '@angular/core';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Crud';
  getData: Employee;
  getchildData(event: Employee) {
    this.getData = event;
  }
}
