import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged = false;
  private username: string | null = null;

  constructor() {
    if (this.isBrowser()) {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('username');
    }
    this.isLogged = false;
    this.username = null;
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  login(username: string) {
    this.isLogged = true;
    this.username = username;
    if (this.isBrowser()) {
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('username', username);
    }
  }

  logout() {
    this.isLogged = false;
    this.username = null;
    if (this.isBrowser()) {
      localStorage.removeItem('isLogged');
      localStorage.removeItem('username');
    }
  }

  isAuthenticated(): boolean {
    if (this.isBrowser()) {
      return this.isLogged || localStorage.getItem('isLogged') === 'true';
    }
    return this.isLogged;
  }

  getUsername(): string | null {
    if (this.isBrowser()) {
      return this.username || localStorage.getItem('username');
    }
    return this.username;
  }
}
