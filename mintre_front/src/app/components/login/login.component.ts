import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../usuario/usuario';
import { LoginService } from '../../loginservice/login.service';
import { AuthResponse } from '../../authresponse/authresponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();

  usuario: Usuario = {email: '', senha: ''};

  constructor(private loginService: LoginService){}

  onSubmit() {
    this.loginService.login(this.usuario).subscribe(
      {
        next: (response: AuthResponse) => {
          console.log('Resposta:', response);
        },
        error: (err) => {
          console.error('Erro:', err);
        },
      }
    );
    // Aqui você pode chamar um serviço de autenticação
    // alert(`Login realizado: ${this.username}`);
    this.close.emit(); // Fecha o modal após o login
  }

  closeModal() {
    this.close.emit();
  }
}
