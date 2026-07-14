import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AuthRoutingModule } from '@modules/auth/auth-routing.module';
import { LoginComponent } from '@modules/auth/login/login.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule, MatCardModule, SharedModule],
  exports: [LoginComponent]
})
export class AuthModule {}
