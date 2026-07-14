import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing-module';
import { LoginComponent } from './login/login.component';

@NgModule({
<<<<<<< HEAD
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRoutingModule],
=======
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
>>>>>>> c3785f0 (VN_A2_02: set up auth routing along with the user roles for all pages on websites)
})
export class AuthModule {}
