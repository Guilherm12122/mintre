import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../usuario/usuario';
import { LoginService } from '../../loginservice/login.service';
import { AuthResponse } from '../../authresponse/authresponse';
import { AlertComponent } from '../alert/alert.component';
import { WinUtils } from '../../utils/winutils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
    AlertComponent
  ]
})
export class LoginComponent {
  @Output() close = new EventEmitter<void>();

  usuario: Usuario = {email: '', senha: ''};
  auth_response: AuthResponse = {token: '', msg: ''};
  statusLogin: string = '';
  showLogin: boolean = false;

  constructor(private loginService: LoginService){}

  onSubmit() {
    this.loginService.login(this.usuario).subscribe(
      {
        next: (response: AuthResponse) => {
          this.auth_response = response;
          // console.log("Resposta: ", this.auth_response);
          // console.log(this.verifyBodyAuthResponse())
          this.validateLogin(this.auth_response);
          this.verifyStatus(this.statusLogin);
        },
        error: (err) => {
          console.error('Erro:', err);
        },
      }
    );
    this.showLogin = false
    // this.close.emit();
  }

  verifyStatus(status_login: string){
    if (status_login == 'sucess') {
      WinUtils.reloadPageWithDelay(2000)
    } 
  }

  verifyBodyAuthResponse(){
    return (this.auth_response.msg.length != 0) ? true : false;
  }

  closeModal() {
    this.close.emit();
  }

  validateLogin(authresponse: AuthResponse){
     this.statusLogin = authresponse.token.length != 0 ? 'sucess' : 'failed';
     this.showLogin = (this.auth_response.msg.length != 0) ? true : false;
  }
}
