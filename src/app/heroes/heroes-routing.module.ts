import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {
  AddHeroComponent,
  HeroComponent,
  HeroesHomeComponent,
  HeroesListComponent,
  SearchHeroComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: HeroesHomeComponent,
    children: [
      { path: 'list', component: HeroesListComponent },
      { path: 'add', component: AddHeroComponent },
      { path: 'edit/:id', component: AddHeroComponent },
      { path: 'search', component: SearchHeroComponent },
      { path: ':id', component: HeroComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
