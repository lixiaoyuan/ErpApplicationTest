import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent } from './admin/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './admin/manage-heroes/manage-heroes.component';

import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [{
    path: 'heroes',
    component: HeroesComponent
}, {
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
}, {
    path: 'detail/:id',
    component: HeroDetailComponent
}, {
    path: 'login',
    component: LoginComponent
}, {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
        {
            path: '',
            canActivateChild: [AuthGuardService],
            component: AdminDashboardComponent,
            children: [{
                path: 'crises',
                component: ManageCrisesComponent
            }, {
                path: 'heroes',
                component: ManageHeroesComponent
            }]
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }