import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    if (this.email.hasError('required'))
    {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}
