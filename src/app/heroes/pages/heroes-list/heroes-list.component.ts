import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styles: [],
})
export class HeroesListComponent implements OnInit {
  constructor(private heroesService: HeroesService) {}

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((data) => (this.heroes = data));
  }
}
