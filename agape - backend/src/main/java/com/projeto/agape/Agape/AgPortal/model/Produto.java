package com.projeto.agape.Agape.AgPortal.model;

import jakarta.persistence.*;

@Entity
@Table(name = "produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod_produto;
    private String nome_produto;
    private String descricao_produto;
    private Double valor_produto;
    private Boolean status_produto;

    public Long getCod_produto() {
        return cod_produto;
    }

    public void setCod_produto(Long cod_produto) {
        this.cod_produto = cod_produto;
    }

    public String getNome_produto() {
        return nome_produto;
    }

    public void setNome_produto(String nome_produto) {
        this.nome_produto = nome_produto;
    }

    public String getDescricao_produto() {
        return descricao_produto;
    }

    public void setDescricao_produto(String descricao_produto) {
        this.descricao_produto = descricao_produto;
    }

    public Double getValor_produto() {
        return valor_produto;
    }

    public void setValor_produto(Double valor_produto) {
        this.valor_produto = valor_produto;
    }

    public Boolean getStatus_produto() {
        return status_produto;
    }

    public void setStatus_produto(Boolean status_produto) {
        this.status_produto = status_produto;
    }
}
