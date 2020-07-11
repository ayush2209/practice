import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  cars = 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg';


  ngOnInit() {
  }

}
