import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { adminDashboard, ownerDashboard } from '@shared/constants/path.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    public authService: AuthService,
    public router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
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
