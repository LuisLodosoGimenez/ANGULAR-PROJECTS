import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
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
