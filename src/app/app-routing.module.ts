import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

const routes: Routes = [
  {path:"viewemp", component:EmployeeListComponent},
  {path:"#",redirectTo:"",pathMatch:'full'},
  {path:"new-employee",component:NewEmployeeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
