import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

import { CrisisDetailResolveService } from './crisis-detail-resolve.service';
import { CanDeactivateGuardService } from '../can-deactivate-guard.service';
const crisisCenterRoutes: Routes = [{
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
        {
            path: '',
            component: CrisisListComponent,
            children: [
                {
                    path: ':id',
                    component: CrisisDetailComponent,
                    canDeactivate: [CanDeactivateGuardService],
                    resolve: {
                        crisis: CrisisDetailResolveService
                    }
                },
                {
                    path: '',
                    component: CrisisHomeComponent
                }
            ]
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(crisisCenterRoutes)],
    exports: [RouterModule]
})
export class CrisisCenterRoutingModeul { }