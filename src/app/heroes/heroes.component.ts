import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Observable<Hero[]>;
  selectedId: number;

  constructor(private heroservice: HeroService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroes = this.route.params.switchMap((p: Params) => {
      this.selectedId = +p['id'];
      return this.heroservice.getHeroes();
    });
  }
  isSelected(hero: Hero) { return hero.id === this.selectedId; }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.selectedId = this.selectedHero.id;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
