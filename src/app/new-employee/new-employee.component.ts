import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,
    private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee()
  }
  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error=>console.log(error));
  }

  goToEmployeeList(){
    this.route.navigate(['/viewemp']);
  }

}
