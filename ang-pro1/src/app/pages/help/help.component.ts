import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../service/apicall.service';

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

  abc;

  constructor(private _api : ApicallService) {
    this._api.getData().subscribe((result)=>{
      this.abc = result;
    })
   }

  ngOnInit() {
  }

  demo(){
    this.check = !this.check;
  }

}
