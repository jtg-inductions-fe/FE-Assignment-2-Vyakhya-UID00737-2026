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

  constructor(
    public sidebarService: SidebarService,
    public authService: AuthService,
    private router: Router,
    private toast: ToastrService,
  ) {}

  toggleMenu() {
    if (this.sidebarService.isMobile) {
      this.sidebarService.toggle();
    }
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.currentUser$.subscribe({
      next: user => {
        this.data = user;
      },
      error: err => {
        this.toast.error('Failed to read user details!');
      },
    });
  }

  public isLoggedIn = this.authService.isLoggedIn();

  onLogout(): void {
    this.isOpen = false;
    this.authService.logout();
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
