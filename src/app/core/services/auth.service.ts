import { Injectable } from '@angular/core';
import { UserData } from '@shared/models/userdata.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'admin@gmail.com', password: 'admin123', role: 'admin' as const },
    { email: 'owner@gmail.com', password: 'owner123', role: 'owner' as const },
  ];

  login(email: string, password: string): UserData | null {
    const user = this.users.find(user => user.email === email && user.password === password);

    if (user) {
      const data: UserData = {
        email: user.email,
        role: user.role,
        token: `${user.email}-token`,
      };
      localStorage.setItem('userData', JSON.stringify(data));
      return data;
    }
    return null;
  }

  getUserRole(): 'admin' | 'owner' | null {
    const data = localStorage.getItem('userData');
    if (!data) return null;
    try {
      return (JSON.parse(data) as UserData).role;
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('userData') !== null;
  }

  logout() {
    localStorage.removeItem('userData');
  }
}
