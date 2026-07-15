import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserData } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  data: UserData | null = null;
  isOpen = false;
  authSubscription!: Subscription;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.currentUser$.subscribe({
      next: user => {
        this.data = user;
      },
      error: () => console.log('Failed to read user details!'),
    });
  }

  onLogout(): void {
    this.isOpen = false;
    this.authService.logout();
    this.router.navigate(['/login']);
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
