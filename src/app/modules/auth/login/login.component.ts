import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { EMAIL_ERROR, PASSWORD_ERROR } from '@shared/constants/error.constants';
import { AuthService } from '@core/services/auth.service';
import { adminDashboard, ownerDashboard } from '@shared/constants/path.constants';
=======
import { EMAIL_ERROR, PASSWORD_ERROR } from 'src/app/shared/constants/error.constants';
import { AuthService } from '../../../core/services/auth.service';
>>>>>>> 956341a (VN_A2_02: rebased branch)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  error = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  emailErrors = EMAIL_ERROR;
  passwordErrors = PASSWORD_ERROR;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  onSubmit(): void {
    this.error = '';
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email_value = this.loginForm.value.email ?? '';
    const password_value = this.loginForm.value.password ?? '';

    const userData = this.authService.login(email_value, password_value);

    if (!userData) {
      this.error = 'Invalid email or password!';
      return;
    }

    this.loginForm.reset();
    if (userData.role === 'admin') {
      this.router.navigate([adminDashboard]);
    } else if (userData.role === 'owner') {
      this.router.navigate([ownerDashboard]);
    }
  }
}
