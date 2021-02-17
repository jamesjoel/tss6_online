import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  check = false;
  a = "rohit";

  user = {
    name : "",
    age : null,
    city : ""
  }

  constructor() { }

  ngOnInit() {
  }

  demo(){
    this.check = !this.check;
  }

}
