import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../service/hello.service';

import { ApicallService } from '../../service/apicall.service';

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

  data;
  constructor(private _helloService : HelloService, private _api : ApicallService) { }

  ngOnInit() {
  }
  
  test(){
    this._helloService.demo1();
  }
  test2(){
    this._helloService.demo2();
  }

  show(){
    this._api.getData().subscribe((result)=>{
      this.data = result;
    })
  }



  // getdata(){
  //   this._http.get<any>("https://reqres.in/api/users?page=2").subscribe((result)=>{
  //     this.data = result;

  //   })
  // }

}
