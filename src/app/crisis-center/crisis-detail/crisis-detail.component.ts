import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Crisis } from '../crisis.service';
import { CanDeactivateComponent } from '../../can-deactivate-guard.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit, CanDeactivateComponent {
  crisis: Crisis;
  editName: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.route.data.subscribe((data: { crisis: Crisis }) => {
        this.editName = data.crisis.name,
        this.crisis = data.crisis;
    });
  }
  cancel() {
    this.gotoCrises();
  }
  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }
  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route })
  }
  CanDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return new Promise<boolean>(res => res(window.confirm('Discard changes?')));
  }

}
