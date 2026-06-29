import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  // بنجيب بيانات اليوزر من localStorage
  const user = localStorage.getItem('user');

  if (user) {
    return true;
  }

  // لو مش عامل login
  router.navigate(['/login']);

  return false;
};
