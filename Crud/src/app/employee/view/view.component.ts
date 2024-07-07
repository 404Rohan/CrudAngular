import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  constructor(private es: EmployeeService) {}
  empdata: Employee[];

  @Output() EditData: EventEmitter<Employee> = new EventEmitter<Employee>();
  ngOnInit(): void {
    this.es.getdata().subscribe((u: Employee[]) => {
      this.empdata = u;
    });
  }
  sendEditData(emps: Employee) {
    this.EditData.emit(emps);
   
  }
  deleteEmployee(id: any) {
    this.es.deleteEm(id).subscribe();
    window.location.reload();
  }
}
