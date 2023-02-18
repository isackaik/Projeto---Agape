package com.projeto.agape.Agape.AgPortal.repository;

import com.projeto.agape.Agape.AgPortal.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}

