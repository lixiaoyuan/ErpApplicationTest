import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';


import { Hero } from '../hero';
import { HeroService } from '../hero.service'
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe((hero) => {
        this.hero = hero;
      });
  }
  goBack(): void {
    this.router.navigate(['/heroes', { id: this.hero ? this.hero.id : null, foo: 'foo' }]);
  }

}
