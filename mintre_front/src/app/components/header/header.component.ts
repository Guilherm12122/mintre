import { APP_ID, Component, HostListener } from '@angular/core';
import { Membro } from '../../membro/membro';
import { MembroService } from '../../membro/membro.service';
import { DataserviceService } from '../../dataservice/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen = false;
  options = ['Mídia', 'Infantil', 'Educação', 'Pastoral']; // Substitua conforme necessário

  constructor(private membroService: MembroService, 
    private dataService: DataserviceService){}

  obtemMembroPorDepartamento(departamento_nome: string){
    this.membroService.getMembros(departamento_nome.toLowerCase())
      .subscribe(apiData => {
        this.dataService.updateData(apiData);
      })
  }

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
