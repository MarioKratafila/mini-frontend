import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
   // console.log('Before', this.isUserLoggedIn())
    if(username === 'mario' && password === 'pass') {
      sessionStorage.setItem('authenticatedUser', username)
   //   console.log('After', this.isUserLoggedIn())
      return true;
    } else {
   //   console.log('After', this.isUserLoggedIn())
      return false;
    }
  }

  executeAuthenticationService(username,password) {

    let basicAuthHeaderString = 'Basic '+window.btoa(username+":"+password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers});
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}