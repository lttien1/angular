import { Component, OnInit } from '@angular/core';
import {FormControl,  FormGroup, Validators, ValidatorFn,  AbstractControl } from '@angular/forms';
import { UserStorage } from '../utils/user-storage';
import { AccountModel } from '../models';

@Component({
  selector: 'app-signup-candidate',
  templateUrl: './signup-candidate.component.html',
  styleUrls: ['./signup-candidate.component.scss']
})

export class SignupCandidateComponent implements OnInit {
  constructor(private userStorage: UserStorage) {}
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  termsAndConditions = false;
  candidateSignupForm = null;
  submitted = false;

  ngOnInit() {
    this.candidateSignupForm = new FormGroup({
      firstNameFormControl: new FormControl(this.firstName, [
        Validators.required,
      ]),
      lastNameFormControl: new FormControl(this.lastName, [
        Validators.required,
      ]),

      emailFormControl: new FormControl(this.email, [
        Validators.required,
        Validators.email,
      ]),
      passwordFormControl: new FormControl(this.password, [
        Validators.required,
      ]),

      termsAndConditionsFormControl: new FormControl(this.termsAndConditions, [
        Validators.requiredTrue,
      ])
    });
  }

  get firstNameFormControl() {
    return this.candidateSignupForm.get('firstNameFormControl');
  }

  get lastNameFormControl() {
    return this.candidateSignupForm.get('lastNameFormControl');
  }

  get emailFormControl() {
    return this.candidateSignupForm.get('emailFormControl');
  }

  get passwordFormControl() {
    return this.candidateSignupForm.get('passwordFormControl');
  }

  get termsAndConditionsFormControl() {
    return this.candidateSignupForm.get('termsAndConditionsFormControl');
  }

  onSignupWithEmail() {
    this.submitted = true;
    if (this.candidateSignupForm.invalid) {
      return;
    }
    const data: AccountModel = {
      id: 1,
      email: this.candidateSignupForm.value.emailFormControl,
    };
    this.userStorage.setUser(data);
  }
}
