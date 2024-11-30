import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8080/auth/login";

  constructor(private httpClient: HttpClient) { }

  login(credentials: Usuario): Observable<any> {
    return this.httpClient.post(this.baseUrl, credentials);
  }
}
