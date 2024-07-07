import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  savedata(emp: Employee) {
    return this.http.post('http://localhost:3000/employee', emp);
  }

  getdata() {
    return this.http.get('http://localhost:3000/employee');
  }
  updateEmp(emps: Employee) {
    return this.http.put('http://localhost:3000/employee/' + emps.id, emps);
  }
  deleteEm(id: number) {
    return this.http.delete('http://localhost:3000/employee/' + id);
  }
}
