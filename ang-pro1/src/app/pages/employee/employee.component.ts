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
    },
    {
      _id : 3,
      name : "gaurav",
      age : 22,
      city : "mumbai",
      gender : "female",
      address : "new market"
    },
    {
      _id : 4,
      name : "nilesh",
      age : 22,
      city : "mumbai",
      gender : "female",
      address : "new market"
    },
    {
      _id : 5,
      name : "nidhi",
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
    if(this.emp._id){
      for(let i = 0; i < this.employes.length; i++)
      {
        //console.log(this.employes[i]._id);
        // console.log(this.emp._id);
        if(this.employes[i]._id == this.emp._id)
        {
          this.employes[i] = this.emp;
        }

      }
    }
    else{

      let total = this.employes.length;
      this.emp._id = total+1;
      this.employes.push(this.emp);
    }
  //  console.log(this.employes);
  }
  askDelete(obj){
    this.emp = obj;
  }
  delete(){
    let n = this.employes.indexOf(this.emp);
    this.employes.splice(n, 1);
  }
  askEdit(obj){
    // this.emp = obj;
    this.emp = {... obj};
  }

}
/*
  arr = ["red", "green", "blue", "yellow"];
  x = "green";

  n = arr.indexOf(x);
  arr.splice(n, 1);



*/
