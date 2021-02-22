import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-studentbox',
  templateUrl: './studentbox.component.html',
  styleUrls: ['./studentbox.component.scss']
})
export class StudentboxComponent implements OnInit {

  @Input() userInfo;
  @Output() deleteEvent = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  delete(id){
    this.deleteEvent.emit(id);
  }

}
