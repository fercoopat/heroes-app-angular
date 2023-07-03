import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent, RegisterComponent } from './pages';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    /* ROUTES MODULE */
    AuthRoutingModule,
  ],
})
export class AuthModule {}
