import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'shared-seccion-almuerzo',
  templateUrl: './seccion-almuerzo.component.html',
  styleUrls: ['./seccion-almuerzo.component.css'],
})
export class SeccionAlmuerzoComponent implements OnInit {
  productos: Products[] = [
    {
      id: 5,
      nombre: 'Torcillo boluñesa',
      descripcion: 'LLeva Salmon, tomate, cebolla, tomillo.',
      precio: 20000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/boloñesa.jpeg',
    },
    {
      id: 6,
      nombre: 'pollo al carbon',
      descripcion: ' LLeva pechuga, zanahoria, tomate, cebollin.',
      precio: 25000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/pechugaCarbon.jpeg',
    },
    {
      id: 7,
      nombre: 'Enslada Gourmet',
      descripcion: 'LLeva huevo, tomate, brocoli, acelga.',
      precio: 14000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/images.jpeg',
    },
    {
      id: 8,
      nombre: 'Salmon',
      descripcion: 'verdura, salmon, frutos secos, hojas verdes',
      precio: 13500,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/salmonSalad.jpg',
    },
  ];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {}

  ordenarProducto(producto: Products) {
    console.log(producto);

    this.carritoService.agregarProducto(producto);
  }
}
