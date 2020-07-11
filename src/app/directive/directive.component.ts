import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  condition = true;
  constructor() { }

  empName = [
    { name: "Ayush", age: 21 },
    { name: "Aman", age: 22 },
    { name: "Farhath", age: 20 },
    { name: "Noor", age: 22 },
    { name: "Eduwa", age: 21 }
  ];
  color = ["bg-success", "text-center", "text-white"];
  // CSS styles: set per current state of component properties
  styleArray = {
    'font-style': 'italic',
    'color': 'red',
    'font-size': '20px'
  };
  name = "Ayush";
  ngOnInit() {
  }
}
