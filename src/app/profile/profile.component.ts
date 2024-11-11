import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports:[RouterModule, MatIconModule, MatMenuModule, MatToolbarModule,MatDividerModule],
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
