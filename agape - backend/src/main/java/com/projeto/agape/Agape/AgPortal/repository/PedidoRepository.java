package com.projeto.agape.Agape.AgPortal.repository;

import com.projeto.agape.Agape.AgPortal.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}

