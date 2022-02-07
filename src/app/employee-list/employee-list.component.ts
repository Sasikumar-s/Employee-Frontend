import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[] =[];
  constructor(private employeeService:EmployeeService,
    private route:Router ) { }

  ngOnInit(): void {
   this.getEmployee();
  }
  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employee=data;
    });
  }
updateEmployee(empId:number){
  this.route.navigate(['update-employee',empId]);
}
deleteEmployee(empId:number){
  this.employeeService.deleteEmployee(empId).subscribe(data=>{
    this.getEmployee();
  },error=>console.log(error));
}

  }
