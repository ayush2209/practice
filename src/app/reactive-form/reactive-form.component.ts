import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidation } from './custom.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  EmpForm = new FormGroup({
    empName: new FormControl('', [Validators.required, CustomValidation.CapitalLatter]),
    age: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, CustomValidation.noSpace])
  });

  get empName() {
    return this.EmpForm.get('empName');
  }
  get email() {
    return this.EmpForm.get('email');
  }
  get age() {
    return this.EmpForm.get('age');
  }
  SubmitForm(data) {
    console.log(data);
  }
  ngOnInit() {
  }

}
