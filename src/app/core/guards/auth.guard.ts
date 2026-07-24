import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { adminDashboard, ownerDashboard } from '@shared/constants/path.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getUserRole();
      if (role === 'admin') {
        this.router.navigate([adminDashboard]);
      } else if (role === 'owner') {
        this.router.navigate([ownerDashboard]);
      }
      return false;
    }
    return true;
  }
}
