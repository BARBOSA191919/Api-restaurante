import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/interface/register-user';
import { UsuariosService } from '../../../service/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  usuarios: RegisterUser[];

  constructor(private UsuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.UsuariosService.getUsuarios().subscribe((data: RegisterUser[]) => {
      this.usuarios = data;
    });
  }
}
