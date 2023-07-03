import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';

import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.verifyAuth().pipe(
      tap((isAuth: boolean) => {
        if (!isAuth) {
          this.router.navigate(['./auth']);
        }
      })
    );

    /* if (!this.authService.user.id) {
      console.log('Blocked by CanActivate');
      return false;
    }

    return true; */
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.verifyAuth().pipe(
      tap((isAuth: boolean) => {
        if (!isAuth) {
          this.router.navigate(['./auth']);
        }
      })
    );
    /* if (!this.authService.user.id) {
      console.log('Blocked by CanLoad');
      return false;
    }

    return true; */
  }
}
