import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  // formValue = {
  //   name: 'First Card',
  //   number: 4234123,
  //   csc: 232
  // };
  formValue = {
    name: '',
    number: '',
    csc: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f, this.formValue);
    // throw new Error('shit shit shit');
  }

}
