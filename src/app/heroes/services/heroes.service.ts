import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../interfaces/heroes.interfaces';

const BASE_URL = 'http://localhost:3000/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(BASE_URL);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${BASE_URL}/${id}`);
  }

  getSuggests(searchTerm: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${BASE_URL}?q=${searchTerm}&_limit=5`);
  }
}
