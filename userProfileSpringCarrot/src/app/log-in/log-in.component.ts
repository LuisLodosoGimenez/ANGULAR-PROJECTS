import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  textoFallo: String = '';

  constructor(private apiService: ApiService) {}

  formularioInicioSesion = new FormGroup({
    nickname: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required]),
  });

  camposCompletos() {
    return this.formularioInicioSesion.value.nickname && this.formularioInicioSesion.value.contraseña;
  }

  iniciarSesion() {
    let body = {
      nick: String(this.formularioInicioSesion.value.nickname),
      password: String(this.formularioInicioSesion.value.contraseña),
    };

    this.apiService.logIn(body).subscribe({
      next: (data) => {
        console.log(data.articulosEnCarrito);
        AppComponent.usuario.id = data.perfil.id;
        AppComponent.usuario.nombre = data.perfil.nombre;
        AppComponent.usuario.nick_name = data.perfil.nick_name;
        AppComponent.usuario.email = data.perfil.email;
        AppComponent.usuario.edad = data.perfil.edad;
        AppComponent.usuario.carrito_compra = data.articulosEnCarrito;
        this.textoFallo = 'YA PUEDE ACCEDER A SUS ESPACIOS PERSONALES';
      },
      error: (error) => {
        (this.textoFallo = 'Nickname o contraseña inválida!'), (AppComponent.usuario.id = 0);
        AppComponent.usuario.nombre = '';
        AppComponent.usuario.nick_name = '';
        AppComponent.usuario.email = '';
        AppComponent.usuario.edad = 0;
        AppComponent.usuario.carrito_compra = [];
      },
    });
  }
}
