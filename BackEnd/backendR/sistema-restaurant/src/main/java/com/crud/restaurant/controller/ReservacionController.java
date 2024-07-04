package com.crud.restaurant.controller;

import com.crud.restaurant.models.Reservacion;
import com.crud.restaurant.service.ReservacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/reservaciones")
@CrossOrigin("*")
public class ReservacionController {

    @Autowired
    private ReservacionService reservacionService;

    @PostMapping("/")
    public ResponseEntity<Reservacion> guardarReservacion(@RequestBody Reservacion reservacion) {
        Reservacion reservacionGuardada = reservacionService.guardarReservacion(reservacion);
        return new ResponseEntity<>(reservacionGuardada, HttpStatus.CREATED);
    }

}
