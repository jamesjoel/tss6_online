import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
  constructor(private _router : Router){ }
  canActivate() {
    if(localStorage.getItem("adminToken"))
      return true;
    else{
      this._router.navigate(["/"]);
      return false;
    }
  }
  
}
