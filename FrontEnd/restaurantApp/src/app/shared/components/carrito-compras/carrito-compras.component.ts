import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { CarritoService } from 'src/app/service/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'shared-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css'],
})
export class CarritoComprasComponent {
  carritoAbierto: boolean = true;
  numero: number = 0;
  productosCarrito: Products[] = [];
  subtotal: number = 0; // Declarar la propiedad subtotal

  constructor(private carritoService: CarritoService) {}

  enviarCarritoAlServidor() {
    this.carritoService
      .enviarCarritoAlServidor(this.productosCarrito)
      .subscribe(
        (respuesta) => {
          Swal.fire(
            'Producto guardado',
            'Producto registrado con exito en el sistema',
            'success'
          );
        },
        (error) => {
          console.error('Error al enviar el carrito:', error);
        }
      );
  }

  ngOnInit(): void {
    this.carritoService.obtenerCarrito().subscribe((productos) => {
      this.productosCarrito = productos;
    });

    this.carritoService.obtenerSubtotal().subscribe((subtotal) => {
      this.subtotal = subtotal;
    });
  }

  toggleCarrito() {
    this.carritoAbierto = !this.carritoAbierto;
  }

  increment(producto: Products) {
    this.carritoService.agregarProducto(producto);
  }

  decrement(producto: Products) {
    if (producto.cantidad === 1) {
      const index = this.productosCarrito.findIndex(
        (p) => p.id === producto.id
      );
      this.carritoService.eliminarProducto(index);
    } else {
      producto.cantidad--;
    }
  }

  deleteProductCar(producto: Products) {
    const index = this.productosCarrito.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
      this.carritoService.eliminarProducto(index);
    }
  }
}
