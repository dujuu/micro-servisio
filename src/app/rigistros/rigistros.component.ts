// registros.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registros',
  standalone: true,
  templateUrl: './rigistros.component.html',
  styleUrls: ['./rigistros.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    CommonModule
  ]
})
export class RigistrosComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      // Simula el envío de datos o llamada al backend
      console.log('Datos de registro:', this.registroForm.value);
      this.snackBar.open('Registro exitoso!', 'Cerrar', {
        duration: 3000,
      });
      this.registroForm.reset();
    } else {
      this.snackBar.open('Formulario inválido. Por favor, revisa los campos.', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}

// Asegúrate de tener las dependencias necesarias importadas en main.ts o en los módulos que correspondan.
    