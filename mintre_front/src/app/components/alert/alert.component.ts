import { Component, Injectable, Input } from '@angular/core';
import { AuthResponse } from '../../authresponse/authresponse';
import { Colors } from '../../enums/colors';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})

@Injectable()
export class AlertComponent {

  @Input() status = '';
  @Input() msg = '';

  color: string = '';

  ngOnInit(): void {
    this.color = (this.status == 'sucess') ? Colors.DARK_GREEN : Colors.LIGHT_RED;

    setTimeout(() => {
      const alertElement = document.querySelector('.alert');
      if (alertElement) {
        alertElement.classList.add('exit');
      }
    }, 1000);
  }
}
