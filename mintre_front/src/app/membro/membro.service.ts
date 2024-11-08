import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';
import { Membro } from './membro';

@Injectable({
  providedIn: 'root'
})
export class MembroService {

  private urlMembro = "http://localhost:8080/membro" 

  constructor(private httpClient: HttpClient) { }

  getMembros(departamento_nome: string){
    
    return this.httpClient.get(this.urlMembro + "/" + departamento_nome);

    }
}
