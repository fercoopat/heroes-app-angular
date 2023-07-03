import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';

import { User } from '../interfaces/user.interface';

const BASE_URL = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User | undefined;

  get user(): User {
    return { ...this._user };
  }

  constructor(private http: HttpClient) {}

  verifyAuth(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<User>(`${BASE_URL}/1`).pipe(
      map((user) => {
        this._user = user;
        return true;
      })
    );
  }

  login(): Observable<User> {
    return this.http.get<User>(`${BASE_URL}/1`).pipe(
      tap((user) => (this._user = user)),
      tap((user) => localStorage.setItem('token', user.id.toString()))
    );
  }

  logout() {
    this._user = undefined;
    localStorage.removeItem('token');
  }
}
