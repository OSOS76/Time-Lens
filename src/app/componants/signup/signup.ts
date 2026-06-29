import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  phone = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  register() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword || !this.phone) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill in all fields',
        confirmButtonColor: '#6d4e0c',
        background: '#c79015',
      });

      return;
    }

    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password Error',
        text: 'Passwords do not match',
        confirmButtonColor: '#6d4e0c',
        background: '#c79015',
      });

      return;
    }

    this.authService
      .signup(this.name, this.email, this.password, this.phone)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Account Created!',
          text: 'Your account has been created successfully',
          confirmButtonColor: '#6d4e0c',
          background: '#c79015',
        }).then(() => {
          this.router.navigate(['/login']);
        });
      })
      .catch((err) => {
        let message = 'Something went wrong';

        if (err.code === 'auth/email-already-in-use') {
          message = 'This email is already registered';
        }

        if (err.code === 'auth/weak-password') {
          message = 'Password must be at least 6 characters';
        }

        if (err.code === 'auth/invalid-email') {
          message = 'Invalid email address';
        }

        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: message,
          confirmButtonColor: '#6d4e0c',
          background: '#a37616',
        });
      });
  }
}
