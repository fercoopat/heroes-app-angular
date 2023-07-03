import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroCardComponent } from './components/hero-card/hero-card.component';
import {
  AddHeroComponent,
  HeroComponent,
  HeroesHomeComponent,
  HeroesListComponent,
  SearchHeroComponent,
} from './pages';
import { ImagePipe } from './pipes/image.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    HeroComponent,
    HeroesHomeComponent,
    HeroesListComponent,
    HeroCardComponent,
    ImagePipe,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    /* FLEX LAYOUT MODULE */
    FlexLayoutModule,
    /* MATERIAL MODULE */
    MaterialModule,
    /* ROUTES MODULE */
    HeroesRoutingModule,
  ],
})
export class HeroesModule {}
