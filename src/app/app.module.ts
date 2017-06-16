import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { CrisisCenterModule } from './crisis-center/crisis-center.module';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { HeroService } from './hero.service';
import { AuthService } from './login/auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { ManageCrisesComponent } from './admin/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './admin/manage-heroes/manage-heroes.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

import { MdButtonModule, MdCheckboxModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CrisisCenterModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [HeroService, AuthService, AuthGuardService, CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Router: ', JSON.stringify(router.config, undefined, 2));
  }
}
