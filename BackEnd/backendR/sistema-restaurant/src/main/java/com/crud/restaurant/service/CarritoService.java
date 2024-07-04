package com.crud.restaurant.service;

import com.crud.restaurant.models.ProductoCarrito;
import com.crud.restaurant.repository.ICarritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarritoService {
    private final ICarritoRepository carritoRepository;

    public CarritoService(ICarritoRepository productoRepository) {
        this.carritoRepository = productoRepository;
    }

    public void guardarCarrito(List<ProductoCarrito> productos) {
        carritoRepository.saveAll(productos);
    }
}
