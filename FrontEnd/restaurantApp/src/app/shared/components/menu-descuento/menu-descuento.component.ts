import { Component } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { CarritoService } from 'src/app/service/carrito.service';

@Component({
  selector: 'shared-menu-descuento',
  templateUrl: './menu-descuento.component.html',
  styleUrls: ['./menu-descuento.component.css'],
})
export class MenuDescuentoComponent {
  productos: Products[] = [
    {
      id: 13,
      nombre: 'Ensalada de pollo',
      descripcion:
        'Esta hecha de tomate, lechuga, pollo, cebolla, pimenton, repollo.',
      precio: 12000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/saladDescuento.jpg',
    },
    {
      id: 14,
      nombre: 'Croissant',
      descripcion:
        'Contiene pan, jugos naturales, naranja, ademas contiene cafe.',
      precio: 10000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/comida.jpg',
    },
    {
      id: 15,
      nombre: 'Ensalda natural',
      descripcion:
        'LLeva huevo, tomate, brocoli, zanahoria, carne de res, cebolla, ajo.',
      precio: 14000,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/saldaGourmet.jpg',
    },
    {
      id: 16,
      nombre: 'Pastas Lashyan',
      descripcion:
        'Pastas, aji, tomatw, pimenton, tomillo, cebollin, queso, maduro, arepa',
      precio: 15500,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/carbonara.jpg',
    },
    {
      id: 17,
      nombre: 'Lasaña mixta',
      descripcion:
        'Queso, carne de res, pollo, pastas, cebolla, silantrin, tomate, pimenton',
      precio: 20500,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/lazaña.jpg',
    },
    {
      id: 18,
      nombre: 'Sushi japones',
      descripcion:
        'Pescado de calidad, repollo, brocoli, tomate, zanahoria, arroz, acelga',
      precio: 13500,
      cantidad: 1,
      imagen: '/assets/img/imgProducts/suchichi.jpg',
    },
  ];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {}

  ordenarProducto(producto: Products) {
    console.log(producto);

    this.carritoService.agregarProducto(producto);
  }
}
