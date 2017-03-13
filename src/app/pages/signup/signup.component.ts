import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['signup.component.scss']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(
    private auth: AuthService,
    private form: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.form.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
      ])],
    })
  }

  isEmail(control: FormControl): {[s: string]: boolean} {
    if(!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {noEmail: true};
    }
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
    if(!this.myForm) {
      return {passwordNotMatch: true};
    }
    if(control.value !== this.myForm.controls['password'].value) {
      return {passwordNotMatch: true};
    }
  }

  onSignUp() {
    this.auth.signupUser(this.myForm.value)
  }

  resetForms() {
    this.myForm.reset()
  }

}
