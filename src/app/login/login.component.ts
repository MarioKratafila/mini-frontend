import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'mario'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    // console.log(this.password)
    if (this.username === 'mario' && this.password === 'pass') {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }



  }

}
