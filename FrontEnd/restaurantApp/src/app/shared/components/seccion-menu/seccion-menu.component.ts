import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/service/carrito.service';
import { Products } from '../../../interface/products';

@Component({
  selector: 'shared-seccion-menu',
  templateUrl: './seccion-menu.component.html',
  styleUrls: ['./seccion-menu.component.css'],
})
export class SeccionMenuComponent implements OnInit {
  productos: Products[] = [
    {
      id: 1,
      nombre: 'Wfles',
      descripcion: 'Wafles, con miel, fresa, hecho con cholate',
      precio: 7000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/Waffles.jpg',
    },
    {
      id: 2,
      nombre: 'enslada de frutas',
      descripcion: 'arroz con leche, helado, kiwi, uva pasa',
      precio: 1000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/saladFruts.jpg',
    },
    {
      id: 3,
      nombre: 'Croissant con cafe',
      descripcion: 'Contiene cafe, jamon, fruta,tomate',
      precio: 8000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/croissant.jpg',
    },
    {
      id: 4,
      nombre: 'Avena',
      descripcion: 'arroz con avena, frutos secos, uva pasa. mani',
      precio: 3500,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/avena2.webp',
    },
  ];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {}

  ordenarProducto(producto: Products) {
    console.log(producto);

    this.carritoService.agregarProducto(producto);
  }
}
