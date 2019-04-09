import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = null
  password = null
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router, private basicAuthService : BasicAuthenticationService) { }

  ngOnInit() {
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
