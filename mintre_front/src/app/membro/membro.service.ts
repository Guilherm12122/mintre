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

  getMembros(departamento_nome: string): Observable<Membro[]>{
    return this.httpClient.get<Membro[]>(this.urlMembro + "/" + departamento_nome)
      .pipe(
        map((response: any) => response.map((user: any) => 
        new Membro(user.id, user.nome, user.url_foto, user.telefone, user.cargo)))
      );
  }
}
