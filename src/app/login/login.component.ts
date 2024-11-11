import { Component,  signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/services/auth.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf, CommonModule } from '@angular/common';
import { User } from '../interfaz/model';
import { ApiService } from '../services/services/api.service';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [RouterModule,CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule],
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private apiService: ApiService, private router: Router) {}

  iniciarSession() {
    if (this.username.trim() === '') {
      this.errorMessage = 'Por favor ingresa un nombre de usuario.';
    } else {
      this.apiService.getUsers().subscribe((users: User[]) => {
        const user = users.find((u: User) => u.username === this.username);
        if (user) {
          this.authService.login(this.username);
          this.router.navigate(['/profile']);
        } else {
          this.errorMessage = 'Usuario no encontrado.';
        }
      });
    }
  }
}  