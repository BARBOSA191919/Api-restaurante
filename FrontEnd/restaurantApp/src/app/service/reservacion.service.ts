import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataReservacion } from '../interface/reservacion';
import { baseUrl } from '../interface/helper';

@Injectable({
  providedIn: 'root',
})
export class ReservacionService {
  constructor(private httpClient: HttpClient) {}

  public postUser(reservacion: DataReservacion) {
    return this.httpClient.post(`${baseUrl}/api/reservaciones/`, reservacion);
  }
}
