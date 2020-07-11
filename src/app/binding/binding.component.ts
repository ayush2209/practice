import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  name = 'I Am for String Interpolation';

  url = 'https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782721__340.jpg';

  color = 'red';

  isApplicable = true;

  empName = 'Ayush Anand';

  number = 4;

  eventBind() {
    // alert('Event Binding Triggered');
    confirm('Are Uou Sure');
  }
  ngOnInit() {
  }

}
