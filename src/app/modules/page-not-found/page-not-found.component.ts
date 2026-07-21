import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { adminDashboard, ownerDashboard } from '@shared/constants/path.constants';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  constructor(
    public router: Router,
    public authService: AuthService,
  ) {}

  onBackClick(): void {
    const role = this.authService.getUserRole();
    if (role === 'admin') {
      this.router.navigate([adminDashboard]);
    } else if (role === 'owner') {
      this.router.navigate([ownerDashboard]);
    }
  }
}
