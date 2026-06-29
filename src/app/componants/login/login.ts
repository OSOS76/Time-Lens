import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

import { Router, RouterLink, RouterModule } from '@angular/router';

import Swal from 'sweetalert2';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login() {
    const customAlert = Swal.mixin({
      color: '#ffffff',
      confirmButtonColor: '#6d4e0c',
      background: '#c79015',
    });

    if (!this.email || !this.password) {
      customAlert.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please enter email and password',
      });

      return;
    }

    this.authService
      .login(this.email, this.password)

      .then(() => {
        customAlert
          .fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome back!',
          })

          .then(() => {
            this.router.navigate(['/bookvr']);
          });
      })

      .catch((error) => {
        let message = 'Something went wrong';

        if (error.code === 'auth/user-not-found') {
          message = 'No account found';
        }

        if (error.code === 'auth/wrong-password') {
          message = 'Incorrect password';
        }

        if (error.code === 'auth/invalid-credential') {
          message = 'Email or password is incorrect';
        }

        customAlert.fire({
          icon: 'error',
          title: 'Login Failed',
          text: message,
        });
      });
  }
}
