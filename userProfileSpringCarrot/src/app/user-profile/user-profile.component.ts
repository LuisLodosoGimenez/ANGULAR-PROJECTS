import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  cerrarSesion() {
    AppComponent.usuario = {
      id: 0,
      nombre: '',
      nick_name: '',
      email: '',
      edad: 0,
      pedidos: [],
      carrito_compra: [],
    };
  }
}
