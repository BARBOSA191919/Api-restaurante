import { Component, OnInit } from '@angular/core';
import { ReservacionService } from '../../../service/reservacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataReservacion } from 'src/app/interface/reservacion';
import Swal from 'sweetalert2';

@Component({
  selector: 'page-reservation',
  templateUrl: './page-reservation.component.html',
  styleUrls: ['./page-reservation.component.css'],
})
export class PageReservationComponent implements OnInit {
  dataReservacion: DataReservacion = {
    id: 0,
    nombreCompleto: '',
    numeroPersonas: 0,
    telefono: '',
    fecha: new Date(),
    hora: '',
  };

  constructor(
    private reservacionService: ReservacionService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (!this.dataReservacion.fecha) {
      this.snack.open('La fecha es requerida!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    this.reservacionService.postUser(this.dataReservacion).subscribe(
      (dato) => {
        console.log(dato);
        Swal.fire(
          'Reservacion guardada',
          'Reservacion registrada con exito en el sistema',
          'success'
        );
      },
      (error) => {
        console.log(error);
        this.snack.open('Ocurrio un error en el sistema !!', 'Aceptar', {
          duration: 3000,
        });
      }
    );
  }
}
