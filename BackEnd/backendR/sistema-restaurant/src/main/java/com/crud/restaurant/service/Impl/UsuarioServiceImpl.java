package com.crud.restaurant.service.Impl;

import com.crud.restaurant.models.Usuario;
import com.crud.restaurant.models.UsuarioRol;
import com.crud.restaurant.repository.IRolRepository;
import com.crud.restaurant.repository.IUsuarioRepository;
import com.crud.restaurant.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private IUsuarioRepository iUsuarioRepository;

    @Autowired
    private IRolRepository rolRepository;


    @Override
    public Usuario saveUser(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception {
        Usuario usuarioLocal = iUsuarioRepository.findByUsername(usuario.getUsername());
        if (usuarioLocal != null){
            System.out.println("El usuario ya esta registrado");
            throw new Exception("El usuario ya esta presente");
        }else {
            for (UsuarioRol usuarioRol: usuarioRoles){
                rolRepository.save(usuarioRol.getRol());
            }
            usuario.getUsuarioRoles().addAll(usuarioRoles);
            usuarioLocal = iUsuarioRepository.save(usuario);
        }
        return usuarioLocal;
    }

    @Override
    public Usuario getUser(String username) {
        return iUsuarioRepository.findByUsername(username);
    }

    @Override
    public void deleteUser(Long usuarioId) {
        iUsuarioRepository.deleteById(usuarioId);
    }
}
