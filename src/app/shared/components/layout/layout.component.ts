import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { SidebarService } from '@core/services/sidebar.service';
import { SidebarOptions } from '@shared/models/sidebar.models';
import { SIDEBAR_CONTENT, COMMON_SIDEBAR_OPTIONS } from '@shared/constants/sidebar.constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  common_sidebar_options: SidebarOptions[] = COMMON_SIDEBAR_OPTIONS;
  dashboardRoute = this.authService.getUserRole() === 'admin' ? '/dashboard/admin' : '/dashboard/owner';

  constructor(
    public sidebar: SidebarService,
    private authService: AuthService,
  ) {}

  isLoggedIn = this.authService.isLoggedIn();
  isMobile = this.sidebar.isMobile;

  get role(): 'admin' | 'owner' | null {
    return this.authService.getUserRole();
  }

  get sidebar_options(): SidebarOptions[] {
    const user_role = this.role;
    return SIDEBAR_CONTENT.filter(opt => (user_role ? opt.show.includes(user_role) : false));
  }

  closeSidebar(): void {
    if (this.sidebar.isMobile) {
      this.sidebar.close();
    }
  }
}
