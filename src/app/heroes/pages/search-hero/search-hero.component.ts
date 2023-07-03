import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
})
export class SearchHeroComponent {
  constructor(private heroesService: HeroesService) {}

  searchTerm: string = '';
  heroes: Hero[] = [];
  selectedHero: Hero;

  searching() {
    if (!this.searchTerm) return;

    this.heroesService
      .getSuggests(this.searchTerm.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    const hero: Hero = event.option.value;

    if (!hero) {
      this.selectedHero = undefined;
      return;
    }

    this.searchTerm = hero.superhero;

    this.heroesService
      .getHeroById(hero.id)
      .subscribe((hero) => (this.selectedHero = hero));
  }
}
