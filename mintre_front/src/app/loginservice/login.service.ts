import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../usuario/usuario';
import { AuthResponse } from '../authresponse/authresponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8080/auth/login";

  constructor(private httpClient: HttpClient) { }

  login(credentials: Usuario): Observable<AuthResponse[]> {
    return this.httpClient.post<AuthResponse[]>(this.baseUrl, credentials);
  }
}
