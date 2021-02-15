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

  data = {
    city : "indore",
    gender : "male"
  }

  constructor() { }

  ngOnInit() {
  }

}

/*

app.get("/api/teacher", (req, res){

                  (function(err, result){
                    res.send(result)
                  })
});



*/
