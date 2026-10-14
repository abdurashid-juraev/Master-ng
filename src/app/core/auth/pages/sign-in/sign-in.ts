import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.html',
  imports: [ReactiveFormsModule],
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class SingIn {
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(6)),
  });
}
