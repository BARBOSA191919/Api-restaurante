import { Component } from '@angular/core';

@Component({
  selector: 'shared-nav-white-icon',
  templateUrl: './nav-white-icon.component.html',
  styleUrls: ['./nav-white-icon.component.css'],
})
export class NavWhiteIconComponent {
  mostrarCarrito: boolean = false;

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
