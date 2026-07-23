import { Injectable } from '@angular/core';
import { UserData } from '@shared/models/userdata.models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'admin@gmail.com', password: 'admin123', role: 'admin' as const },
    { email: 'owner@gmail.com', password: 'owner123', role: 'owner' as const },
  ];

  private userSubject = new BehaviorSubject<UserData | null>(this.getInitialData());
  currentUser$: Observable<UserData | null> = this.userSubject.asObservable();

  getInitialData(): UserData | null {
    try {
      return JSON.parse(localStorage.getItem('userData') || 'null');
    } catch {
      return null;
    }
  }

  login(email: string, password: string): UserData | null {
    const user = this.users.find(user => user.email === email && user.password === password);

    if (user) {
      const data: UserData = {
        email: user.email,
        role: user.role,
        token: `${user.email}-token`,
      };
      localStorage.setItem('userData', JSON.stringify(data));
      this.userSubject.next(data);
      return data;
    }
    return null;
  }

  getUserRole(): 'admin' | 'owner' | null {
    const user = this.userSubject.value;
    return user ? user.role : null;
  }

  isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

  logout() {
    localStorage.removeItem('userData');
    this.userSubject.next(null);
  }
}
