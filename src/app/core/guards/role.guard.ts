import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if(!authService.isLoggedIn()){
        router.navigate(['/login']);
        return false;
    }

    const userRole = authService.getUserRole();
    const expectedRoles = route.data['roles'] as Array<string>;

    if(expectedRoles && expectedRoles.includes(userRole || '')) {
        return true;
    }

    router.navigate(['/page-not-found']);
    return false;
}