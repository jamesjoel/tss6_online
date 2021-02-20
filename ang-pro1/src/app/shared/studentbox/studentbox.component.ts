import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-studentbox',
  templateUrl: './studentbox.component.html',
  styleUrls: ['./studentbox.component.scss']
})
export class StudentboxComponent implements OnInit {

  @Input() userInfo;
  constructor() { }

  ngOnInit() {
  }

}
