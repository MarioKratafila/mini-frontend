import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    let username = 'mario';
    let password = 'pass';
    let basicAuthHeaderString = 'Basic '+window.btoa(username+":"+password);
    
    req = req.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    })

    return next.handle(req);
  }

  constructor() { }
}
