import { Component, OnInit } from '@angular/core';
import { EmployeeListModule } from 'src/app/model/employee-list.module';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:EmployeeListModule[]=[
    {
      id:'1',
      name:'Stefen',
      email:'stefen@gmail.com',
      phone:'9876543210',
      salary:'100000',
      department:'Humar Resources'
    },
    {
      id:'2',
      name:'John',
      email:'john@gmail.com',
      phone:'9090909889',
      salary:'80000',
      department:'Information Technology'
    },
    {
      id:'3',
      name:'Jaya',
      email:'jaya@gmail.com',
      phone:'9797979666',
      salary:'50000',
      department:'Sales'
    },
    {
      id:'4',
      name:'Ramki',
      email:'ramki@gmail.com',
      phone:'9898989898',
      salary:'30000',
      department:'Security'
    }
  ];
  constructor() { }

  ngOnInit(): void {
    this.employees.push();
  }

}
