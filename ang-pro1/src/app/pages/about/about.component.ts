import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  a = 100;
  b = 'indore';

  x = 500;
  y = 200;
  constructor() { }

  ngOnInit() {
  }

}
