import { Component, Input } from '@angular/core';
import { Membro } from '../../membro/membro';
import { DataserviceService } from '../../dataservice/dataservice.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrl: './departamento.component.css'
})
export class DepartamentoComponent {

  membros: Membro[] = [];

  constructor(private dataService: DataserviceService){}

  ngOnInit(){
    this.dataService.data$.subscribe(
      (data: Membro[]) => {
        this.membros = data;
        console.log(this.membros);
      }
    );
  }
}
