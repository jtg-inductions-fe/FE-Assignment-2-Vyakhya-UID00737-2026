import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@core/services/auth.service';
import { UserData } from '@shared/models/userdata.models';
import { SidebarService } from '@core/services/sidebar.service';
import { Subscription } from 'rxjs';
import { loginPage } from '@shared/constants/path.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  data: UserData | null = null;
  isOpen = false;
  authSubscription!: Subscription;
  isMobileView = false;
  isUserLoggedIn = false;

  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService,
    private router: Router,
    private toast: ToastrService,
  ) {}

  toggleMenu() {
    if (this.isMobileView) {
      this.sidebarService.toggle();
    }
  }

  ngOnInit(): void {
    this.sidebarService.isMobile$.subscribe(isMobile => {
      this.isMobileView = isMobile;
    });
    this.isUserLoggedIn = this.authService.isLoggedIn();
    this.authSubscription = this.authService.currentUser$.subscribe({
      next: user => {
        this.data = user;
        this.isUserLoggedIn = this.authService.isLoggedIn();
      },
      error: err => {
        this.toast.error('Failed to read user details!');
      },
    });
  }

  onLogout(): void {
    this.isOpen = false;
    this.authService.logout();
    this.isUserLoggedIn = false;
    this.router.navigate([loginPage]);
  }

  onClick(): void {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
