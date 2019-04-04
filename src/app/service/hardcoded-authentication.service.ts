import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

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

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}
