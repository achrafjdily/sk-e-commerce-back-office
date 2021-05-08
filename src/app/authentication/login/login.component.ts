import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthPageActions } from '../../ngrx/app-state/actions/auth';

@Component({
  selector: 'sk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm() {
    this.loginForm = this.fb.group({
      usermail: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  login() {
    console.log('haha')
    if (this.loginForm.valid) {
      this.store.dispatch(AuthPageActions.login({ loginRequest: this.loginForm.value }));
    }
  }
}
