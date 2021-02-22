import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  counter=0;
 user = {
   _id : null,
   name : "",
   age : null
 }
 userArr=[];
  constructor() { }

  ngOnInit() {
  }
  show(){
    // console.log(this.user);
    this.user._id = this.counter;
    this.counter++;
    let obj = {... this.user};
    this.userArr.push(obj);
    this.user = {
      _id : null,
      name : "",
      age : null
    }
  }
  delete(n){
    this.userArr.splice(n, 1);
  }

}
