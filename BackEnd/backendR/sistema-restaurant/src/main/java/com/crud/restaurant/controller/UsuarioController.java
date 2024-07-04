package com.crud.restaurant.controller;

import com.crud.restaurant.models.Rol;
import com.crud.restaurant.models.Usuario;
import com.crud.restaurant.models.UsuarioRol;
import com.crud.restaurant.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/")
    public Usuario saveUser(@RequestBody Usuario usuario) throws Exception{

        Set<UsuarioRol> usuarioRoles = new HashSet<>();

        Rol rol = new Rol();
        rol.setRolId(2L);
        rol.setNombre("NORMAL");

        UsuarioRol usuarioRol = new UsuarioRol();
        usuarioRol.setUsuario(usuario);
        usuarioRol.setRol(rol);

        usuarioRoles.add(usuarioRol);
        return usuarioService.saveUser(usuario, usuarioRoles);
    }

    @GetMapping("/{username}")
    public Usuario getUser(@PathVariable("username")String username){
        return usuarioService.getUser(username);
    }

    @DeleteMapping("/{usuarioId}")
    public void deleteUser(@PathVariable("usuarioId")Long usuarioId){
        usuarioService.deleteUser(usuarioId);
    }
}

