import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet, RouterLink } from '@angular/router'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  result = ''
  result1 = ''

  formularioRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.minLength(10)]),
    nickname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(10)]),
    edad: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })

  mailIsOk(): void {
    const mailProvided = this.formularioRegistro.get('mail')?.value
    const optionsMail = ['@gmail.com', '@hotmail.com']

    if (mailProvided && mailProvided.trim() != '') {
      if (optionsMail.some((optionMail) => mailProvided.includes(optionMail))) this.result = 'Correo aceptado'
      else this.result = 'Correo no admisible'
    } else this.result = 'Es obligatorio añadir un correo'
  }

  passwordIsOk(): void {
    const passwordProvided = this.formularioRegistro.get('contraseña')?.value

    if (passwordProvided != null) {
      if (this.validatePassword(passwordProvided)) this.result1 = 'y Contraseña válida'
      else this.result1 = 'y Contraseña no válida'
    } else this.result1 = 'y Es obligatorio añadir una contraseña'
  }

  validatePassword(passwordP: string): boolean {
    const capitalLetter = /[A-Z]/.test(passwordP)
    const hasNumber = /[0-9]/.test(passwordP)
    const specialCharacter = /[^A-Za-z0-9]/.test(passwordP)

    return capitalLetter && hasNumber && specialCharacter
  }
}
