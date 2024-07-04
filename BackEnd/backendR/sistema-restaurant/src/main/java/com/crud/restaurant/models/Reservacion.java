package com.crud.restaurant.models;

import jakarta.persistence.*;

import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "reservacion")
public class Reservacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombreCompleto;

    private long numeroPersonas;

    private String telefono;

    private Date fecha;

    private String hora;

    public Reservacion() {
    }

    public Reservacion(String nombreCompleto, long numeroPersonas, String telefono, Date fecha, String hora) {
        this.nombreCompleto = nombreCompleto;
        this.numeroPersonas = numeroPersonas;
        this.telefono = telefono;
        this.fecha = fecha;
        this.hora = hora;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        id = id;
    }

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public long getNumeroPersonas() {
        return numeroPersonas;
    }

    public void setNumeroPersonas(long numeroPersonas) {
        this.numeroPersonas = numeroPersonas;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }
}
