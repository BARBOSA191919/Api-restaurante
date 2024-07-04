import { RegisterUser } from 'src/app/interface/register-user';
import { UsuariosService } from '../../../service/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'page-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  usuario: RegisterUser = {
    id: 0,
    nombre: '',
    apellido: '',
    username: '',
    tipoDocumento: '',
    email: '',
    direccion: '',
    password: '',
    telefono: '',
    numeroDocumento: '',
  };

  constructor(
    private UsuariosService: UsuariosService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (this.usuario.username == '' || this.usuario.username == null) {
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    }

    this.UsuariosService.añadirUsuario(this.usuario).subscribe(
      (dato) => {
        console.log(dato);
        Swal.fire(
          'Usuario guardado',
          'Usuario registrado con exito en el sistema',
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
