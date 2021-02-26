import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  demo1(){
    alert();
  }
  demo2(){
    alert("hello");
  }

}
