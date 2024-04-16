import { CommonModule } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Usuario } from './usuario';
import { ApiService } from './api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  getAllPosts() {
    this.apiService.getPosts().subscribe({
      next: (response) => console.log(response),
      error: (error) => null,
    });
  }

  logIn() {
    let body = {
      nick: 'ana123',
      password: 'contraseña4',
    };

    this.apiService.logIn(body).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  ngOnInit(): void {
    console.log('Inicio proyecto');
    this.getPosts();
  }

  getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  title = 'userProfileSpringCarrot';
  static usuario: Usuario = {
    id: 0,
    nombre: '',
    nick_name: '',
    email: '',
    edad: 0,
    pedidos: [],
    carrito_compra: [],
  };

  haIniciado() {
    if (
      AppComponent.usuario.id == 0 &&
      AppComponent.usuario.nombre == '' &&
      AppComponent.usuario.nick_name == '' &&
      AppComponent.usuario.email == '' &&
      AppComponent.usuario.edad == 0 &&
      AppComponent.usuario.pedidos.length == 0 &&
      AppComponent.usuario.carrito_compra.length == 0
    )
      return false;
    else return true;
  }
}
