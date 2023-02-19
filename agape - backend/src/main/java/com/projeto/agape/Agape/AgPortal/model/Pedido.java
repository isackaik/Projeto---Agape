package com.projeto.agape.Agape.AgPortal.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "pedidos")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod_pedido;
    private Long cod_cliente;
    private Long cod_produto;
    private Integer qtd_produto;
    private Double total_pedido;
    private LocalDate data_pedido;

    public Long getCod_pedido() {
        return cod_pedido;
    }

    public void setCod_pedido(Long cod_pedido) {
        this.cod_pedido = cod_pedido;
    }

    public Long getCod_cliente() {
        return cod_cliente;
    }

    public void setCod_cliente(Long cod_cliente) {
        this.cod_cliente = cod_cliente;
    }

    public Long getCod_produto() {
        return cod_produto;
    }

    public void setCod_produto(Long cod_produto) {
        this.cod_produto = cod_produto;
    }

    public Integer getQtd_produto() {
        return qtd_produto;
    }

    public void setQtd_produto(Integer qtd_produto) {
        this.qtd_produto = qtd_produto;
    }

    public Double getTotal_pedido() {
        return total_pedido;
    }

    public void setTotal_pedido(Double total_pedido) {
        this.total_pedido = total_pedido;
    }

    public LocalDate getData_pedido() {
        return data_pedido;
    }

    public void setData_pedido(LocalDate data_pedido) {
        this.data_pedido = data_pedido;
    }
}
