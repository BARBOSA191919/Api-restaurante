import { Component } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'shared-seccion-bebidas',
  templateUrl: './seccion-bebidas.component.html',
  styleUrls: ['./seccion-bebidas.component.css'],
})
export class SeccionBebidasComponent {
  productos: Products[] = [
    {
      id: 19,
      nombre: 'Choco friend',
      descripcion: 'LLeva fresas, bananos, kiwi, uva, chocolate.',
      precio: 7500,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/bebida.jpg',
    },
    {
      id: 20,
      nombre: 'Limanja',
      descripcion: 'LLeva hielo, alcohol, naranja dulce.',
      precio: 9500,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/bebida2.jpg',
    },
    {
      id: 21,
      nombre: 'Coctel con alcohol',
      descripcion: 'LLeva fresas, alcohol, frutos rojos, canela.',
      precio: 9500,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/bebida3.jpeg',
    },
    {
      id: 22,
      nombre: 'LimonRojos',
      descripcion: 'Alcohol, frutos secos, limonsillo',
      precio: 10000,
      cantidad: 1,
      imagen: 'assets/img/imgProducts/coctelFrutos.jpg',
    },
    {
      id: 23,
      nombre: 'Limonada de coco',
      descripcion: 'LLeva fresas, bananos, coco, limon, canela.',
      precio: 7000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/bebida5.png',
    },
    {
      id: 24,
      nombre: 'Limonada de Naranja',
      descripcion: 'LLeva naranja agria, Limon, kiwi, pasa.',
      precio: 8000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/bebida6.jpg',
    },
    {
      id: 25,
      nombre: 'Club colombia dorada',
      descripcion: 'Bebida fria con hielo, marca colombiana.',
      precio: 4000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/bebida7.png',
    },
    {
      id: 26,
      nombre: 'Bebida cocala',
      descripcion: 'Completamente fria, con hielo',
      precio: 3500,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/bebida8.jpg',
    },
  ];

  productosPrimeraFila: Products[];
  productosSegundaFila: Products[];

  constructor(private carritoService: CarritoService) {
    // Dividimos el arreglo en dos partes
    const mitad = Math.ceil(this.productos.length / 2);
    this.productosPrimeraFila = this.productos.slice(0, mitad);
    this.productosSegundaFila = this.productos.slice(mitad);
  }

  ngOnInit(): void {}

  ordenarProducto(producto: Products) {
    console.log(producto);

    this.carritoService.agregarProducto(producto);
  }
}
