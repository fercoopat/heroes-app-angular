import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent, RegisterComponent } from './pages';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    /* ROUTES MODULE */
    AuthRoutingModule,
    /* MATERIAL MODULE */
    MaterialModule,
  ],
})
export class AuthModule {}
