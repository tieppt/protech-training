import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rt-form',
  templateUrl: './rt-form.component.html',
  styleUrls: ['./rt-form.component.scss']
})
export class RtFormComponent implements OnInit {

  cardForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      cardName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      cardNumber: '1234321',
      csc: '123'
    });
    setTimeout(() => {
      this.cardForm.patchValue({
        cardName: 'ahihi'
      });
    }, 2000);
  }

  get cardFormEmail(): FormControl {
    return this.cardForm.get('email') as FormControl;
  }

  onSubmit() {
    console.log(this.cardForm);
  }

}
