import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(
  ) { }

  private employessList = [];
  private employessRoles = [];
  private roletoshow = [];
  private flag = false;


  ngOnInit() {
    this.employessList.push(
      {"id" : 123, "name": "Joe Cocker"},
      {"id" : 124, "name" : "JFK"}
      )

      this.employessRoles.push(
        {"id" : 123, "roleId" : 1 ,"description" : "Manager"},
        {"id" : 124, "roleId" : 2 ,"description" : "Waiter"}
        );
  }

  GetEmployeeRoles(id: number) {
    this.roletoshow = []
    this.roletoshow.push(this.employessRoles[id]);
    console.log(this.roletoshow.length);
  }

}
