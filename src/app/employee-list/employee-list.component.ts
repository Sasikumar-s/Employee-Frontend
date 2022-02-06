import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[] =[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
   this.getEmployee();
  }
  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(
      (success:any)=>{
        console.log(success);
      },
      (failure:any)=>{
        console.log(failure);
      },
    )};
  


}
