import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen = false;
  options = ['Mídia', 'Infantil', 'Educação', 'Pastoral']; // Substitua conforme necessário

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
