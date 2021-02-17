import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  emp = {
    _id : null,
    name : "",
    age : null,
    city : "",
    gender : "",
    address : ""
  }

  employes = [
    {
      _id : 1,
      name : "Rohit",
      age : 25,
      city : "indore",
      gender : "male",
      address : "palaysia"

    },
    {
      _id : 2,
      name : "jaya",
      age : 22,
      city : "mumbai",
      gender : "female",
      address : "new market"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  empty(){
    this.emp = {
      _id : null,
      name : "",
      age : null,
      city : "",
      gender : "",
      address : ""
    }
  }
  save(){
    this.employes.push(this.emp);
  }
  askDelete(obj){
    this.emp = obj;
  }

}
