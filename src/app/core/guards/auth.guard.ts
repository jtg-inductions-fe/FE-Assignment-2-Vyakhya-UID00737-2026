import { inject } from "@angular/core";
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if(authService.isLoggedIn()) {
        const role = authService.getUserRole();
        if(role === 'admin') {
            router.navigate(['/dashboard/owner']);
        }else if(role === 'owner') {
            router.navigate(['dashboard/owner']);
        }
        return false;
    }
    return true;
};
