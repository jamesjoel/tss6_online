import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

 user = {
   name : "",
   age : null
 }
 userArr=[];
  constructor() { }

  ngOnInit() {
  }
  show(){
    // console.log(this.user);
    let obj = {... this.user};
    this.userArr.push(obj);
    this.user = {
      name : "",
      age : null
    }
  }

}
