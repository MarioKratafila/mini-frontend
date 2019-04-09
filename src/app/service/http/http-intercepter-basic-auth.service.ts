import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken()
    let username = this.basicAuthService.getAuthenticatedUser()

    if (this.basicAuthService && username) {
      req = req.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      })
    }

    return next.handle(req);
  }

  constructor(private basicAuthService : BasicAuthenticationService) { }
}
