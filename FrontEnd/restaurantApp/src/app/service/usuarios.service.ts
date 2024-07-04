import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../interface/register-user';
import { baseUrl } from '../interface/helper';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  public añadirUsuario(usuario: RegisterUser) {
    return this.httpClient.post(`${baseUrl}/usuarios/`, usuario);
  }

  public getUsuarios() {
    return this.httpClient.get<RegisterUser[]>(`${baseUrl}/usuarios/`);
  }
}
