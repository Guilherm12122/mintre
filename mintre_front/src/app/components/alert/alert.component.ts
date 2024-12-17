import { Component, Injectable, Input } from '@angular/core';
import { AuthResponse } from '../../authresponse/authresponse';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})

@Injectable()
export class AlertComponent {

  constructor(){}

  statusDataAlert = {color: '', msg_alert: ''}

  defineAlertProperties(statusLogin: string, authresponse: AuthResponse){
    this.statusDataAlert.color = (statusLogin == 'sucess') ? 'green' : 'red'; 
    this.statusDataAlert.msg_alert = authresponse.msg;
  }
}
