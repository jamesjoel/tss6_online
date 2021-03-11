import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cateArr=[];
  constructor(private _cateServ : CategoryService, public _loginServ : LoginService) {
    this._cateServ.getAll().subscribe((result)=>{
      this.cateArr= result;
    })
   }

  ngOnInit() {
  }

}
