import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../app/services/services/auth.service';

export const autoGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isAuthenticated();
};

export const loginGuard: CanActivateFn = (route, state) => {
  return !inject(AuthService).isAuthenticated();
};
