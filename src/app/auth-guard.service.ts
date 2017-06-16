import { Injectable } from '@angular/core';

import {
  CanActivate, Router, ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras
} from '@angular/router';

import { AuthService } from './login/auth.service';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn)
      return true;
    this.authService.redirectUrl = url;
    let sessionId = 123456789;

    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    }

    this.router.navigate(['/login'], navigationExtras);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canActivate');
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canActivateChild');
    return false;
    //let url: string = state.url;
    //return this.checkLogin(url);
  }
}
