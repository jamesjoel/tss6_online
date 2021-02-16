import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  a = 'z';
  constructor() { }

  ngOnInit() {
  }
  demo(){
    alert();
  }
  demo2(){
    alert();
  }
  demo3(){
    alert("you are copying some text");
  }

}
