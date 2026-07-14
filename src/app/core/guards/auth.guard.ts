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

<<<<<<< HEAD
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getUserRole();
      if (role === 'admin') {
        this.router.navigate([adminDashboard]);
      } else if (role === 'owner') {
        this.router.navigate([ownerDashboard]);
      }
      return false;
=======
    if(authService.isLoggedIn()) {
        const role = authService.getUserRole();
        if(role === 'admin') {
<<<<<<< HEAD
            router.navigate(['/dashboard/admin']);
        }else if(role === 'owner') {
            router.navigate(['/dashboard/owner']);
=======
            router.navigate(['/dashboard/owner']);
        }else if(role === 'owner') {
            router.navigate(['dashboard/owner']);
>>>>>>> 7f11f97 (VN_A2_02: set up auth routing along with the user roles for all pages on websites)
        }
        return false;
>>>>>>> 388cb2d (VN_A2_02: set up auth routing along with the user roles for all pages on websites)
    }
    return true;
  }
}
