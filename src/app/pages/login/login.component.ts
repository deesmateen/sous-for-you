import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(
    private form: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.myForm = this.form.group({
      // username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSigninUser() {
    this.auth.loginUser(this.myForm.value)
  }

  resetForms() {
    this.myForm.reset({
      email: '',
      password: ''
    })
  }

}
