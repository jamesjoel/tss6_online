import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo3-mini',
  templateUrl: './demo3-mini.component.html',
  styleUrls: ['./demo3-mini.component.scss']
})
export class Demo3MiniComponent implements OnInit {

  @Output() goToParent = new EventEmitter; 
  @Output() x = new EventEmitter;

  a;
  constructor() { }
  
  ngOnInit() {
  }
  
  go(){
     this.goToParent.emit(this.a); 
  }
  test(){
    this.x.emit();
  }

}
