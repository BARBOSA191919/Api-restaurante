import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/interface/register-user';
import { UsuariosService } from '../../../service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'page-actualizar-user',
  templateUrl: './actualizar-user.component.html',
  styleUrls: ['./actualizar-user.component.css'],
})
export class ActualizarUserComponent implements OnInit {
  usuario: RegisterUser;
  ngOnInit(): void {}
  onSubmit() {}
}
