import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { sidebar_width } from '@shared/constants/sidebar.constants';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebar = new BehaviorSubject<boolean>(true);
  isOpen$ = this.sidebar.asObservable();
  private mobile = new BehaviorSubject<boolean>(false);
  isMobile$ = this.mobile.asObservable();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(`(max-width: ${sidebar_width})`)
      .pipe(takeUntilDestroyed())
      .subscribe(res => {
        const isMobile = res.matches;
        this.mobile.next(isMobile);
        this.sidebar.next(!isMobile);
      });
  }

  toggle(): void {
    this.sidebar.next(!this.sidebar.value);
  }

  open(): void {
    this.sidebar.next(true);
  }

  close(): void {
    this.sidebar.next(false);
  }
}
