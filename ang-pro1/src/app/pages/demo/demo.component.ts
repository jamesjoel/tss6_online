import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  a="indore";
  b;

  students = [
    {
      name : "rohit",
      age : 25
    },
    {
     name : "jaya",
     age : 22
    },
    {
      name : "nilesh",
      age : 30
    }
  ];
  constructor() { }

  ngOnInit() {
  }


    go(){
      this.b = this.a;
    }


}
