import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
<<<<<<< HEAD
export class LoginComponent {}
=======
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error = '';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {}

  // Using built-in validators to validate correct format of email and password
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.error = '';
    if(this.loginForm.invalid) {
      this.error = 'Please enter valid email or pasword!';
      return;
    }

    const {email, password} = this.loginForm.value;
    const user = this.authService.login(email, password);

    if(user) {
      if(user.role === 'admin') {
        this.router.navigate(['/dashboard/admin']);
      }else if(user.role === 'owner') {
        this.router.navigate(['/dashboard/owner']);
      }
    }else {
      this.error = 'Invalid email or password!';
    }
  }
}
>>>>>>> c3785f0 (VN_A2_02: set up auth routing along with the user roles for all pages on websites)
