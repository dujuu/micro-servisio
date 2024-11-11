import { Component } from '@angular/core';
import { ApiService } from '../services/services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Álbumes</h2>
    <ul>
      <li *ngFor="let album of albums">{{ album.title }}</li>
    </ul>
    <button (click)="irAlMenu()">Volver al Menú</button>
  `,
})
export class AlbumsComponent {
  albums: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getAlbums().subscribe((data) => (this.albums = data));
  }

  irAlMenu() {
    this.router.navigate(['/profile']);
  }
}
