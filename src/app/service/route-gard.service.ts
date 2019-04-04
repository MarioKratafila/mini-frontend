import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGardService implements CanActivate {

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if (this.authService.isUserLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  constructor(private authService : HardcodedAuthenticationService) { }
}
