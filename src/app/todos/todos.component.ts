import { Component } from '@angular/core';
import { ApiService } from '../services/services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
;
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Tareas Pendientes</h2>
    <ul>
      <li *ngFor="let todo of todos">{{ todo.title }}</li>
    </ul>
    <button (click)="irAlMenu()">Volver al Menú</button>
  `,
})
export class TodosComponent {
  todos: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getTodos().subscribe((data) => (this.todos = data));
  }

  irAlMenu() {
    this.router.navigate(['/profile']);
  }
}