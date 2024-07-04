import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'shared-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  mostrarCarrito: boolean = false;

  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
