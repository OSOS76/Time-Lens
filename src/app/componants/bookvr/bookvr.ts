import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import Swal from 'sweetalert2';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase.config';

import { AuthService } from '../../services/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bookvr',
  standalone: true,

  imports: [
    RouterLink,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DatePipe,
  ],

  templateUrl: './bookvr.html',
  styleUrl: './bookvr.scss',
})
export class Bookvr implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  bookingData = {
    bookingDate: new Date(),

    bookingTime: new Date().toTimeString().slice(0, 5),

    customerEmail: '',
    customerName: '',
    customerPhone: '',

    experience: '',
    headsetType: '',

    participants: 1,

    paymentStatus: 'pending',
    status: 'confirmed',

    totalAmount: 0,
  };

  ngOnInit() {
    const user = localStorage.getItem('user');

    if (user) {
      const userData = JSON.parse(user);

      this.bookingData.customerName = userData.name || '';

      this.bookingData.customerEmail = userData.email || '';

      this.bookingData.customerPhone = userData.phone || '';
    }
  }

  updatePrice() {
    const quantity = Number(this.bookingData.participants);

    // Software فقط
    if (this.bookingData.experience === 'Ramses II Software') {
      this.bookingData.totalAmount = 200 * quantity;
    }

    // VR + Software
    else if (this.bookingData.experience === 'VR Headset + Software') {
      if (this.bookingData.headsetType === 'Meta Quest 3') {
        this.bookingData.totalAmount = 700 * quantity;
      } else if (this.bookingData.headsetType === 'Meta Quest 3S') {
        this.bookingData.totalAmount = 600 * quantity;
      } else {
        this.bookingData.totalAmount = 0;
      }
    } else {
      this.bookingData.totalAmount = 0;
    }
  }

  async submitBooking() {
    if (
      !this.bookingData.customerName ||
      !this.bookingData.customerEmail ||
      !this.bookingData.customerPhone ||
      !this.bookingData.experience
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please fill all fields',
      });

      return;
    }

    try {
      const booking = {
        ...this.bookingData,

        bookingDate: this.bookingData.bookingDate.toLocaleDateString('en-GB'),
      };

      await addDoc(
        collection(db, 'booking'),

        booking,
      );

      Swal.fire({
        icon: 'success',
        title: 'Reservation Completed',
        text: 'Your request has been submitted',
      });
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: 'Something went wrong',
      });
    }
  }

  async logout() {
    await this.authService.logout();

    localStorage.removeItem('user');

    this.router.navigate(['/home']);
  }
}
