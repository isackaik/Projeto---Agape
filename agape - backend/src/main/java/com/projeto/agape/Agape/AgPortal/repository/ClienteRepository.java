package com.projeto.agape.Agape.AgPortal.repository;

import com.projeto.agape.Agape.AgPortal.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}