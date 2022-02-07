import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url="http://localhost:8080/sk/employees"
  constructor(private httpClient:HttpClient) {  }

  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url}`);
  }
  addEmployee(employee :Employee):Observable<Object>{
    return this.httpClient.post(`${this.url}`,employee);
  }

  getEmployeeById(empId:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.url}/${empId}`);
  }
  updateEmployee(id:number,employee:Employee):Observable<Object>{
    return this.httpClient.put<Employee>(`${this.url}/${id}`,employee);
  }
  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete<Employee>(`${this.url}/${id}`);
  }
}
