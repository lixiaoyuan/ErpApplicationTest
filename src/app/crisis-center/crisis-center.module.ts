import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisService } from './crisis.service';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisHomeComponent } from './crisis-home/crisis-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

import { CrisisCenterRoutingModeul } from './crisis-center.routing.module';
import { CrisisDetailResolveService } from './crisis-detail-resolve.service';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisisCenterRoutingModeul
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisListComponent,
        CrisisHomeComponent,
        CrisisDetailComponent
    ],
    providers: [
        CrisisService,
        CrisisDetailResolveService
    ]
})
export class CrisisCenterModule { }