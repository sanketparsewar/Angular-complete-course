import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedUser = localStorage.getItem('userData');
  if (loggedUser != null) {
    return true;
  } else {
    // Redirect to login page if user is not logged in
    router.navigateByUrl('login');
    return false;
  }

  return true;
};
