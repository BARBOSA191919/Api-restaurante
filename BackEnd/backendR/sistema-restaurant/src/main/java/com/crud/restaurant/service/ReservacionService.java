package com.crud.restaurant.service;

import com.crud.restaurant.models.Reservacion;
import com.crud.restaurant.repository.IReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservacionService {

    @Autowired
    private IReservationRepository iReservationRepository;

    public Reservacion guardarReservacion(Reservacion reservacion) {
        return iReservationRepository.save(reservacion);
    }

}
