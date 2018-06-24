import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  email = '';
  password = '';
  loginForm = null;

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
      passwordFormControl: new FormControl(this.password, [
        Validators.required,
      ])
    });
  }

  get emailFormControl() {
    return this.loginForm.get('emailFormControl');
  }

  get passwordFormControl() {
    return this.loginForm.get('passwordFormControl');
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('Form Control', this.loginForm);
  }
}
