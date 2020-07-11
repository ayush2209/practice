import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // 2
  @Input() img ;
  @Output() event = new EventEmitter();

  constructor() { }
  // OutPut
  sendUrl(url) {
    this.event.emit(url);
    console.log(this.event.emit(url));
  }
  ngOnInit() {
  }

}
