import { Component } from '@angular/core';
import { ApiService } from '../services/services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Publicaciones</h2>
    <ul>
      <li *ngFor="let post of posts">{{ post.title }}</li>
    </ul>
    <button (click)="irAlMenu()">Volver al Menú</button>
  `,
})
export class PostsComponent {
  posts: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getPosts().subscribe((data) => (this.posts = data));
  }

  irAlMenu() {
    this.router.navigate(['/profile']); // Redirige al menú de perfil
  }
}
