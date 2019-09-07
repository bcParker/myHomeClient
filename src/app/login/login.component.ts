
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [

    trigger('formState', [
      state('hide', style({
        opacity: 0,
        display: 'none',
      })),
      state('show', style({
        opacity: 1,
        display: 'block',
      })),
      transition('show <=> hide', animate(0))
    ])
  ]
})

export class LoginComponent {
  @Input('email') email: string = '';
  @Input('password') password: string = '';

  state = 'login';

  loginToggle() {
    this.state = this.state == 'login' ? 'signup' : 'login';
  }
  get loginState() {
    return this.state == 'login' ? 'show' : 'hide';
  }
  get signupState() {
    return this.state == 'signup' ? 'show' : 'hide';
  }

loginUserData = {};
signInUserData = {};

constructor(private router: Router, private _auth: AuthService) { }

ngOnInit() {

}

signInUser() {
  this._auth.signInUser(this.signInUserData)
    .subscribe(
      res => {
        console.log(res),
        localStorage.setItem('token', res.sessionToken)
      },
      err => console.log(err),
    )
    console.log('logged in');
}

loginUser(){
  console.log(this.loginUserData);
  this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res),
          localStorage.setItem('token', res.sessionToken)
      },
      err => console.log(err)
    )
}
// submit(event) {
//   event.preventDefault();
//   fetch(`http://localhost:3000/user/signin`, {
//     method: 'POST',
//     body: JSON.stringify({
//       email: this.email,
//       password: this.password
//     }),
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     })
//   }).then(response => response.json())
//     .then(json => {
//       this.storeSession(json.loggedInUser, json.token)
//       this.router.navigate(["home"]);
//     })
//     .catch(err => alert("Invalid credentials"))
// }

// storeSession({ role }, token) {
//   sessionStorage.setItem('role', role)
//   sessionStorage.setItem('token', token)
// }
}


