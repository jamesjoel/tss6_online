import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
// <div appHello></div>
export class HelloDirective {

  constructor(private _ele : ElementRef) {
    // console.log(this._ele.nativeElement);
    // this._ele.nativeElement.style.backgroundColor = "red";
   }

   @HostListener('click') demo(){
     this._ele.nativeElement.style.backgroundColor = "blue";
   }

}

/*
  <div style="font-size : 20px"></div>

  ele.nativeElement.style.fontSize = "20px"

  ele.navtiveElement.style.borderRadius = "50px";



*/
