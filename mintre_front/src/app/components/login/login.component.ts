import { Component } from '@angular/core';
import { Usuario } from '../../usuario/usuario';
import { LoginService } from '../../loginservice/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Usuario = {email: '', senha: ''};
  error = '';

  constructor(private login_service: LoginService) {}

  postLogin() {

  }
}
