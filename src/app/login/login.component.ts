import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router: Router, private authService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    // console.log(this.password)
    if (this.authService.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true
    }



  }

}
