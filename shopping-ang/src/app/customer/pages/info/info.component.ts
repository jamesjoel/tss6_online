import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  
  arr=[];
  constructor(private _http : HttpClient) { }

  ngOnInit() {
  }
  demo(a){
    console.log(a.innerHTML);
  }
  demo2(b){
    console.log(b.innerHTML);
  }
  demo3(c){
    console.log(c.value);
    c.value="james";
  }
  demo4(d){
    // console.log(d.getAttribute("src"));
    d.setAttribute("src", "./assets/images/2.jpg");
  }
  upload(image){
    // console.log(image.files[0]);
    var file = image.files[0];

    var form = new FormData(); // create a form with enctype
    form.append("image", file);

    this._http.post<any>("http://localhost:3000/api/upload", form).subscribe((result)=>{
      console.log(result);
      this.arr.push(result.path);
      console.log(this.arr);
    })

  }

}



/*
  <h1>hello</h1>

  tag.innerHTML

  <input type="text" />

  tag.value

  <img src="" />

  <table border="1">

  tag.getAttribute("border")










*/