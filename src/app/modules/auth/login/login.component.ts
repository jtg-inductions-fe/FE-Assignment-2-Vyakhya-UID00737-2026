import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.error = '';

    if (!this.email.trim() || !this.password.trim()) {
      this.error = 'Email and password are required!';
      return;
    }

    const userData = this.authService.login(this.email, this.password);

    if (!userData) {
      this.error = 'Invalid email or password!';
      return;
    }

    if (userData.role === 'admin') {
      this.router.navigate(['/dashboard/admin']);
    } else if (userData.role === 'owner') {
      this.router.navigate(['/dashboard/owner']);
    }
  }
}
