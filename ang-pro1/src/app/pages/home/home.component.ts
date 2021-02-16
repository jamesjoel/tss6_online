import { Component, OnInit } from '@angular/core';
/*
class Compoent{



}
class OnInit{



}



*/


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = "rohit";
  age = 25;

  arr = ["red", "green", "blue"];
  city = ["indore", "ujjain", "bhopal", "mumbai", "pune"];

  data = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "rohit",
      age : 25,
      city : "indore"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}

