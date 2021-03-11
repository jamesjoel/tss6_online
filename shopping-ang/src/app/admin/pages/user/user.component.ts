import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  allUser=[];
  constructor(private _usersServ : UsersService) {
    this._usersServ.getAllUsers().subscribe((result)=>{
      console.log(result);
      this.allUser = result;
    })
   }

  ngOnInit() {
  }

}
