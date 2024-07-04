package com.crud.restaurant.repository;

import com.crud.restaurant.models.ProductoCarrito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICarritoRepository extends JpaRepository<ProductoCarrito, Long> {
}
