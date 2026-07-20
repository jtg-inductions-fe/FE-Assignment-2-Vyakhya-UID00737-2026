import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { SidebarService } from '@core/services/sidebar.service';
import { SidebarOptions } from '@shared/models/sidebar.models';
import { SIDEBAR_CONTENT, COMMON_SIDEBAR_OPTIONS } from '@shared/constants/sidebar.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  private subscription = new Subscription();
  common_sidebar_options: SidebarOptions[] = COMMON_SIDEBAR_OPTIONS;
  dashboardRoute = this.authService.getUserRole() === 'admin' ? '/dashboard/admin' : '/dashboard/owner';
  isSidebarOpen = false;
  isUserLoggedIn = false;
  isMobileView = false;

  constructor(
    private sidebar: SidebarService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.sidebar.isOpen$.subscribe(isOpen => {
        this.isSidebarOpen = isOpen;
      }),
    );

    this.subscription.add(
      this.authService.currentUser$.subscribe(user => {
        this.isUserLoggedIn = !!user;
      }),
    );

    this.subscription.add(
      this.sidebar.isMobile$.subscribe(isMobile => {
        this.isMobileView = isMobile;
      }),
    );
  }

  get role(): 'admin' | 'owner' | null {
    return this.authService.getUserRole();
  }

  get sidebar_options(): SidebarOptions[] {
    const user_role = this.role;
    return SIDEBAR_CONTENT.filter(opt => (user_role ? opt.show.includes(user_role) : false));
  }

  closeSidebar(): void {
    if (this.isMobileView) {
      this.sidebar.close();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
