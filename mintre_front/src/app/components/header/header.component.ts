import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen = false;
  options = ['Mídia', 'Infantil', 'Educação', 'Pastoral']; // Substitua conforme necessário

  toggleDropdown(event:  Event) {
    event.stopPropagation()
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropDown(){
    if(this.isOpen){
      this.isOpen = false;
    }
  }
}
