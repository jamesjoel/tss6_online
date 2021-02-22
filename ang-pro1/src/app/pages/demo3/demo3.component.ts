import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  name;
  constructor() { }

  ngOnInit() {
  }

  recParent(a){
    // console.log(a);
    this.name = a;
  }

  hello(b){
    alert(b);
  }

}
