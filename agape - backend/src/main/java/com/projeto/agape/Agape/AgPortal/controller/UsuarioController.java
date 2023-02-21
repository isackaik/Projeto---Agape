package com.projeto.agape.Agape.AgPortal.controller;

import com.projeto.agape.Agape.AgPortal.model.Usuario;
import com.projeto.agape.Agape.AgPortal.repository.UsuarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/usuarios")
public class UsuarioController {
    private UsuarioRepository usuarioRepository;

    public UsuarioController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @GetMapping
    public List<Usuario> getUsuarios() {
        return usuarioRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<String> createUsuario(@RequestBody Usuario usuario) {
        Optional<Usuario> existingUser = usuarioRepository.findById(usuario.getId_usuario());
        if (existingUser.isPresent()) {
            return ResponseEntity.badRequest().body("Identificador já está em uso.");
        }
        usuarioRepository.save(usuario);
        return ResponseEntity.ok("Usuário cadastrado com sucesso");
    }

    @GetMapping("/{id}/{password}")
    public ResponseEntity<String> validaUsuario(@PathVariable Long id, @PathVariable String password){
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if (usuario.isPresent()){
            if (usuario.get().getPassword_usuario().equals(password)){
                return ResponseEntity.ok("Acesso autorizado!");
            } else return ResponseEntity.badRequest().body("Identificador ou senha inválida!");
        } else
            return ResponseEntity.badRequest().body("Usuário não cadastrado.");
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if (usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id, @RequestBody Usuario novoUsuario) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if (usuario.isPresent()) {
            Usuario usuarioExistente = usuario.get();
            usuarioExistente.setId_usuario(novoUsuario.getId_usuario());
            usuarioExistente.setPassword_usuario(novoUsuario.getPassword_usuario());
            usuarioRepository.save(usuarioExistente);
            return ResponseEntity.ok(usuarioExistente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        if (usuario.isPresent()) {
            usuarioRepository.delete(usuario.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

