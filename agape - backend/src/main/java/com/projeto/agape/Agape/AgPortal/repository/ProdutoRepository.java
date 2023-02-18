package com.projeto.agape.Agape.AgPortal.repository;

import com.projeto.agape.Agape.AgPortal.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}

