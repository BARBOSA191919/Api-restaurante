package com.crud.restaurant.repository;

import com.crud.restaurant.models.Reservacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IReservationRepository extends JpaRepository<Reservacion, Long> {
}
