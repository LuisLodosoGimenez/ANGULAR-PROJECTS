import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicUser } from './interfaces/basic-user';
import { Root } from './usuario-login';
import { UsuarioRegistrarse } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8',
    });
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  logIn(body: BasicUser) {
    const headers = new HttpHeaders({
      accept: '*/*',
      'Content-Type': 'application/json-patch+json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.post<Root>(`http://localhost:5237/api/Api/login2`, body);
  }

  signIn(body: UsuarioRegistrarse) {
    const headers = new HttpHeaders({
      accept: '*/*',
      'Content-Type': 'application/json-patch+json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.post(`http://localhost:5237/api/Api/registro`, body);
  }
}
