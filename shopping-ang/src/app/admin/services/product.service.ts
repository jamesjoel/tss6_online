import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:3000/api/admin/product/";
  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get<any>(this.apiUrl, 
      {
        headers : { Authorization : localStorage.getItem("adminToken")}
      });
  }
  get(id){ //5
    return this._http.get<any>(this.apiUrl+id, 
      {
        headers : { Authorization : localStorage.getItem("adminToken")}
      });
  }

  add(obj){
    return this._http.post<any>(this.apiUrl, obj, 
      {
        headers : { Authorization : localStorage.getItem("adminToken")}
      });
  }

  update(obj, id){
    return this._http.put<any>(this.apiUrl+id, obj,
      {
        headers : { Authorization : localStorage.getItem("adminToken")}
      });
  }
  delete(id){
    return this._http.delete<any>(this.apiUrl+id, 
      {
        headers : { Authorization : localStorage.getItem("adminToken")}
      });
  }
}
