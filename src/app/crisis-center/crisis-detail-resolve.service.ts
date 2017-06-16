import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolveService implements Resolve<Crisis>{

  constructor(private cs: CrisisService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Crisis | Promise<Crisis> {
    let id = route.params['id'];
    return this.cs.getCrisis(id).then(cr => {
      if (cr)
        return cr;
      else {
        this.router.navigate(['/crisis-center']);
        return null;
      }
    });
  }


}
