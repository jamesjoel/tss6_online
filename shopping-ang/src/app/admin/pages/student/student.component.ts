import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  student = [
    {
      name : "rohit",
      age : 25,
      fee : 5000,
      gender : "male"
    },
    {
      name : "nilesh",
      age : 28,
      fee : 7800,
      gender : "male"
    },
    {
      name : "nidhi",
      age : 22,
      fee : 4000,
      gender : "female"
    },
    {
      name : "parul",
      age : 29,
      fee : 4000,
      gender : "female"
    }

  ];
  a = false;
  constructor() { }

  ngOnInit() {
  }

  demo(){
    // alert()
    this.a = true;
  }

}


