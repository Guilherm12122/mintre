import { Component } from '@angular/core';
import { Membro } from '../../membro/membro';
import { DataserviceService } from '../../dataservice/dataservice.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrl: './departamento.component.css'
})
export class DepartamentoComponent {

  data: any;

  constructor(private dataService: DataserviceService){}

  ngOnInit() {
    this.dataService.data$.subscribe(dados => {
      this.data = dados;
      console.log(this.data);
    })
  }
}
