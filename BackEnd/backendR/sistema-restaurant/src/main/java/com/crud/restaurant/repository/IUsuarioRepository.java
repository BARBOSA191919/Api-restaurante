package com.crud.restaurant.repository;

import com.crud.restaurant.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUsuarioRepository extends JpaRepository<Usuario, Long> {
    public Usuario findByUsername(String username);

    void deleteById(Long usuarioId);
}
