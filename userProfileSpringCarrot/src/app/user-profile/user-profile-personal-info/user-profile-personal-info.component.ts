import { Component } from '@angular/core';
import { Usuario } from '../../usuario';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-user-profile-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './user-profile-personal-info.component.html',
  styleUrl: './user-profile-personal-info.component.css',
})
export class UserProfilePersonalInfoComponent {
  usuario: Usuario = {
    id: 0,
    nombre: '',
    nick_name: '',
    email: '',
    edad: 0,
    pedidos: [],
    carrito_compra: [],
  };

  constructor() {
    this.usuario = AppComponent.usuario;
  }
}
