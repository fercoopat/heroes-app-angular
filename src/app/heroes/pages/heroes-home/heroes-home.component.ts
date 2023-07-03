import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class HeroesHomeComponent implements OnInit {
  showFiller = false;

  get user(): User {
    return this.authService.user;
  }

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    console.log(this.user);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./auth']);
  }
}
