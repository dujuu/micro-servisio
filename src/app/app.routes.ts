import { Routes, CanActivateFn } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { AuthService } from './services/services/auth.service';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { autoGuard } from './auth.guard';
import { Component, Injectable, inject } from '@angular/core';
import { RigistrosComponent } from './rigistros/rigistros.component';

const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if (authService.isAuthenticated()) {
    return false;
  }
  return true;
};

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [autoGuard] },
  { path: 'users', component: UsersComponent, canActivate: [autoGuard] },
  { path: 'todos', component: TodosComponent, canActivate: [autoGuard] },
  { path: 'posts', component: PostsComponent, canActivate: [autoGuard] },
  { path: 'albums', component: AlbumsComponent, canActivate: [autoGuard] },
  { path: 'registros', component: RigistrosComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
