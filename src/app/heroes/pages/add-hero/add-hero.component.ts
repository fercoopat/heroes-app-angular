import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Hero, Publisher } from '../../interfaces';
import { HeroesService } from '../../services/heroes.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 10px;
      }
    `,
  ],
})
export class AddHeroComponent implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      this.route.params
        .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
        .subscribe((hero) => (this.hero = hero));
    }
  }

  saveHero() {
    if (this.hero.superhero.trim().length === 0) return;

    if (this.hero.id) {
      this.heroesService
        .updateHero(this.hero)
        .subscribe((hero) => this.showSnackbar('Hero Updated!'));
    } else {
      this.heroesService.createHero(this.hero).subscribe((hero) => {
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackbar('Hero Created!');
      });
    }
  }

  deleteHero() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: this.hero,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroesService
          .deleteHero(this.hero.id)
          .subscribe((resp) => this.router.navigate(['/heroes']));
      }
    });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'Close', {
      duration: 2000,
    });
  }
}
