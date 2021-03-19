import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private _ele : ElementRef) { }


  @HostListener('click') a(){
    console.log(this._ele);
    // let h1 = document.create
    // h1.innerHTML = "Welcome";
  
  }
}
