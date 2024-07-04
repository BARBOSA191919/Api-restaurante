import { Component } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'shared-seccion-comida',
  templateUrl: './seccion-comida.component.html',
  styleUrls: ['./seccion-comida.component.css'],
})
export class SeccionComidaComponent {
  productos: Products[] = [
    {
      id: 9,
      nombre: 'Pasa Rollo',
      descripcion: 'LLeva pesacado, pollo, apio, tomillo.',
      precio: 17200,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/comida1.jpg',
    },
    {
      id: 10,
      nombre: 'Carne Gour',
      descripcion: 'LLeva carne, repollo, guisantes.',
      precio: 25000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/comida3.jpeg',
    },
    {
      id: 11,
      nombre: 'camaron',
      descripcion: 'LLeva huevo, tomate, brocoli, acelga.',
      precio: 14000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/camaronjpg.jpg',
    },
    {
      id: 12,
      nombre: 'Colombianada',
      descripcion: 'chicharon, aji, frutos secos, maduro, arepa',
      precio: 13500,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/colombiano.jpg',
    },
  ];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {}

  ordenarProducto(producto: Products) {
    console.log(producto);

    this.carritoService.agregarProducto(producto);
  }
}
