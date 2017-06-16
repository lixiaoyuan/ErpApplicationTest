import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router, NavigationExtras } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  ngOnInit() {
  }
  setMessage() {
    this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }


}
