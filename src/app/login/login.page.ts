import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: string = '';
  public password: string = '';
  public errorMessage: string='';
  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    const validUsername = 'maicol'; // Nombre de usuario válido
    const validPassword = '123'; // Contraseña válida

    if (this.username === validUsername && this.password === validPassword) {
      this.router.navigate(['/hoja-de-vida']);
    } else {
      this.errorMessage = 'Credenciales de inicio de sesión incorrectas';
    }
  }
}
