package com.crud.restaurant.service;

import com.crud.restaurant.models.Usuario;
import com.crud.restaurant.models.UsuarioRol;

import java.util.Set;

public interface UsuarioService {
    public Usuario saveUser(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    public Usuario getUser(String username);

    public void deleteUser(Long usuarioId);
}
