import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    const userRole = this.authService.getUserRole();
    const expectedRoles = route.data['roles'] as Array<string>;

    if (expectedRoles && expectedRoles.includes(userRole || '')) {
      return true;
    }

    this.router.navigate(['/page-not-found']);
    return false;
  }
}
