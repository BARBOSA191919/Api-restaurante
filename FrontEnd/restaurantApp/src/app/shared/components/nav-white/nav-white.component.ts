import { Component } from '@angular/core';

@Component({
  selector: 'shared-nav-white',
  templateUrl: './nav-white.component.html',
  styleUrls: ['./nav-white.component.css'],
})
export class NavWhiteComponent {
  mostrarCarrito: boolean = false;

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
