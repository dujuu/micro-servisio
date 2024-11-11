import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from './services/services/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, FormsModule, MatDividerModule, MatToolbarModule, MatButtonModule],
})
export class AppComponent {
  name = 'Sistema con API de JSONPlaceholder';
  constructor(public authService: AuthService) {}

  isHome(): boolean {
    // Verifica si la ruta actual es /home para siempre mostrar la barra en esa ruta
    return window.location.pathname === '/home';
}
}
