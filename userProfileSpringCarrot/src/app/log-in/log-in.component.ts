import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, RouterLink, RouterModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  formularioInicioSesion = new FormGroup({
    nickname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  camposCompletos() {
    return this.formularioInicioSesion.value.nickname && this.formularioInicioSesion.value.contraseña
  }

  iniciarSesion() {
    AppComponent.usuario.nick_name = this.formularioInicioSesion.value.nickname!
  }
}
