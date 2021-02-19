import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-mini-shared',
  templateUrl: './mini-shared.component.html',
  styleUrls: ['./mini-shared.component.scss']
})
export class MiniSharedComponent implements OnInit {

  @Input() miniStudent;
  constructor() { }

  ngOnInit() {
  }

}
