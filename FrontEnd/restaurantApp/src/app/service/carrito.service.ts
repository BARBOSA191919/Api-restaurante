import { Injectable } from '@angular/core';
import { Products } from '../interface/products';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../interface/helper';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carrito = new BehaviorSubject<Products[]>([]);
  private subtotalSubject = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  enviarCarritoAlServidor(productos: Products[]): Observable<any> {
    return this.http.post(`${baseUrl}/api/carrito`, productos);
  }

  agregarProducto(producto: Products) {
    const carritoActual = this.carrito.value;
    const productoExistente = carritoActual.find((p) => p.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      carritoActual.push({ ...producto, cantidad: 1 });
    }

    this.carrito.next(carritoActual);
    this.calcularSubtotal();

    this.snackBar.open('Producto agregado correctamente', 'Cerrar', {
      duration: 3000, // Duración del mensaje en milisegundos
      horizontalPosition: 'end', // Posición horizontal
      verticalPosition: 'bottom', // Posición vertical
    });
  }

  eliminarProducto(index: number) {
    const carritoActual = this.carrito.value;
    carritoActual.splice(index, 1);
    this.carrito.next(carritoActual);
    this.calcularSubtotal();
  }

  obtenerCarrito(): Observable<Products[]> {
    return this.carrito.asObservable();
  }

  calcularSubtotal() {
    let subtotal = 0;
    this.carrito.value.forEach((producto) => {
      subtotal += producto.precio * producto.cantidad;
    });
    this.subtotalSubject.next(subtotal);
  }

  obtenerSubtotal(): Observable<number> {
    return this.subtotalSubject.asObservable();
  }

  limpiarCarrito() {
    this.carrito.next([]);
    this.subtotalSubject.next(0);
  }
}
