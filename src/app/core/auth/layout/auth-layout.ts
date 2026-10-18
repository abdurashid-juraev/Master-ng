import { Component } from '@angular/core';
import { SingIn } from '../pages/sign-in/sign-in';

@Component({
  selector: 'auth-layout',
  templateUrl: './auth-layout.html',
  imports: [SingIn],
})
export default class AuthLayout {}
