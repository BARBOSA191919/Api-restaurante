package com.crud.restaurant.controller;

import com.crud.restaurant.models.ProductoCarrito;
import com.crud.restaurant.service.CarritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carrito")
@CrossOrigin("*")
public class CarritoController {

        private final CarritoService carritoService;

        public CarritoController(CarritoService carritoService) {
            this.carritoService = carritoService;
        }

        @PostMapping
        public ResponseEntity<?> guardarCarrito(@RequestBody List<ProductoCarrito> productos) {
            carritoService.guardarCarrito(productos);
            return ResponseEntity.ok().build();
        }

}


