import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {ElementRef, Input, OnDestroy, Optional, Self} from '@angular/core';
import {FormBuilder,  ControlValueAccessor, NgControl} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material/form-field';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  hide = true;
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
