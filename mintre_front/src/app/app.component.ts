import { Component, OnInit } from '@angular/core';
import { Membro } from './membro/membro';
import { MembroService } from './membro/membro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // membros: Membro[] = []

  // constructor(private membroService: MembroService){}

  // obtemMembroPorDepartamento(departamento_nome: string){
  //   this.membroService.getMembros(departamento_nome)
  //     .subscribe((data: Membro[]) => {
  //       this.membros = data;
  //     })
  // }
}
