import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path:"homepage", component:HomepageComponent},
  {path:"employees", component:EmployeesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
