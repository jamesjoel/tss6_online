import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private _http : HttpClient) { }

  getData(){
    return this._http.get<any>("https://reqres.in/api/users?page=2");
  }
}
