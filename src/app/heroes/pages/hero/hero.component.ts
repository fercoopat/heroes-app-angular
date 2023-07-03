import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Hero } from '../../interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 10px;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService
  ) {}

  hero: Hero;

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  goBack = () => this.router.navigate(['/heroes/list']);
}
