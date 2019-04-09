import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

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

  constructor(private router: Router, private authService: HardcodedAuthenticationService, private basicAuthService : BasicAuthenticationService) { }

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

  handleBasicAuthLogin() {
    this.basicAuthService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.invalidLogin = false
        this.router.navigate(['welcome', this.username])
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )

  }

}
