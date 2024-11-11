import { Component } from '@angular/core';
import { ApiService } from '../services/services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Album, Post, Todo, User } from '../interfaz/model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatPaginatorModule, MatSortModule, FormsModule],
  template: `
    <h2>Usuarios</h2>
    <input matInput (keyup)="applyFilter($event)" placeholder="Buscar usuarios">
    <table mat-table [dataSource]="dataSource" matSort>
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Nombre</th>
        <td mat-cell *matCellDef="let user">{{ user.name }}</td>
      </ng-container>
      <ng-container matColumnDef="username">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Usuario</th>
        <td mat-cell *matCellDef="let user">{{ user.username }}</td>
      </ng-container>
      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>
        <td mat-cell *matCellDef="let user">{{ user.email }}</td>
      </ng-container>
      <ng-container matColumnDef="todosPending">
        <th mat-header-cell *matHeaderCellDef>Tareas Pendientes</th>
        <td mat-cell *matCellDef="let user">
          <span matBadge>{{ user.todosPending }}</span>
        </td>
      </ng-container>
      <ng-container matColumnDef="todosCompleted">
        <th mat-header-cell *matHeaderCellDef>Tareas Concluidas</th>
        <td mat-cell *matCellDef="let user">
          <span matBadge>{{ user.todosCompleted }}</span>
        </td>
      </ng-container>
      <ng-container matColumnDef="postsCount">
        <th mat-header-cell *matHeaderCellDef>Publicaciones</th>
        <td mat-cell *matCellDef="let user">
          <span matBadge>{{ user.postsCount }}</span>
        </td>
      </ng-container>
      <ng-container matColumnDef="albumsCount">
        <th mat-header-cell *matHeaderCellDef>Álbumes</th>
        <td mat-cell *matCellDef="let user">
          <span matBadge>{{ user.albumsCount }}</span>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
    
    <!-- Botón para regresar al perfil -->
    <button mat-raised-button color="primary" (click)="irAlMenu()">Volver al Perfil</button>
  `,
})
export class UsersComponent {
  displayedColumns: string[] = ['name', 'username', 'email', 'todosPending', 'todosCompleted', 'postsCount', 'albumsCount'];
  dataSource = new MatTableDataSource<User>();

  constructor(private apiService: ApiService, private router: Router) {
    this.loadUsers();
  }

  loadUsers() {
    this.apiService.getUsers().subscribe((users: User[]) => {
      this.dataSource.data = users;

      // Cargar datos adicionales
      this.apiService.getTodos().subscribe((todos: Todo[]) => {
        const todosByUser = this.groupByUserId(todos, 'userId');
        this.apiService.getPosts().subscribe((posts: Post[]) => {
          const postsByUser = this.groupByUserId(posts, 'userId');
          this.apiService.getAlbums().subscribe((albums: Album[]) => {
            const albumsByUser = this.groupByUserId(albums, 'userId');

            // Asocia la información a cada usuario
            this.dataSource.data = this.dataSource.data.map(user => ({
              ...user,
              todosPending: todosByUser[user.id]?.filter(todo => !todo.completed).length || 0,
              todosCompleted: todosByUser[user.id]?.filter(todo => todo.completed).length || 0,
              postsCount: postsByUser[user.id]?.length || 0,
              albumsCount: albumsByUser[user.id]?.length || 0,
            }));
          });
        });
      });
    });
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue; // Establecer el valor de filtro

    // Especifica cómo quieres que se filtre, si deseas filtrar por propiedades específicas
    this.dataSource.filterPredicate = (data: User, filter: string) => {
      return (
        data.name.toLowerCase().includes(filter) ||
        data.username.toLowerCase().includes(filter) ||
        data.email.toLowerCase().includes(filter)
      );
    };
  }

  groupByUserId(items: any[], key: string): { [key: number]: any[] } {
    return items.reduce((result, item) => {
      (result[item[key]] = result[item[key]] || []).push(item);
      return result;
    }, {});
  }

  irAlMenu() {
    this.router.navigate(['/profile']);
  }
}
