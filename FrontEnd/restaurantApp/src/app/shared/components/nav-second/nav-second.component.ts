import { Component } from '@angular/core';

@Component({
  selector: 'shared-nav-second',
  templateUrl: './nav-second.component.html',
  styleUrls: ['./nav-second.component.css'],
})
export class NavSecondComponent {
  mostrarCarrito: boolean = false;

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
