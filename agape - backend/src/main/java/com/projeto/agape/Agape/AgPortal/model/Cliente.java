package com.projeto.agape.Agape.AgPortal.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "clientes")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cod_cliente;
    private String nome_cliente;
    private String cpf_cliente;
    private String rg_cliente;
    private LocalDate nascimento_cliente;
    private String cidade_cliente;
    private String bairro_cliente;
    private String uf_cliente;
    private String endereco_cliente;
    private String complemento_cliente;
    private Long cep_cliente;
    private String telefone_cliente;
    private String celular_cliente;
    private String observacao_cliente;

    public Long getCod_cliente() {
        return cod_cliente;
    }

    public void setCod_cliente(Long cod_cliente) {
        this.cod_cliente = cod_cliente;
    }

    public String getNome_cliente() {
        return nome_cliente;
    }

    public void setNome_cliente(String nome_cliente) {
        this.nome_cliente = nome_cliente;
    }

    public String getCpf_cliente() {
        return cpf_cliente;
    }

    public void setCpf_cliente(String cpf_cliente) {
        this.cpf_cliente = cpf_cliente;
    }

    public String getRg_cliente() {
        return rg_cliente;
    }

    public void setRg_cliente(String rg_cliente) {
        this.rg_cliente = rg_cliente;
    }

    public LocalDate getNascimento_cliente() {
        return nascimento_cliente;
    }

    public void setNascimento_cliente(LocalDate nascimento_cliente) {
        this.nascimento_cliente = nascimento_cliente;
    }

    public String getCidade_cliente() {
        return cidade_cliente;
    }

    public void setCidade_cliente(String cidade_cliente) {
        this.cidade_cliente = cidade_cliente;
    }

    public String getBairro_cliente() {
        return bairro_cliente;
    }

    public void setBairro_cliente(String bairro_cliente) {
        this.bairro_cliente = bairro_cliente;
    }

    public String getUf_cliente() {
        return uf_cliente;
    }

    public void setUf_cliente(String uf_cliente) {
        this.uf_cliente = uf_cliente;
    }

    public String getEndereco_cliente() {
        return endereco_cliente;
    }

    public void setEndereco_cliente(String endereco_cliente) {
        this.endereco_cliente = endereco_cliente;
    }

    public String getComplemento_cliente() {
        return complemento_cliente;
    }

    public void setComplemento_cliente(String complemento_cliente) {
        this.complemento_cliente = complemento_cliente;
    }

    public Long getCep_cliente() {
        return cep_cliente;
    }

    public void setCep_cliente(Long cep_cliente) {
        this.cep_cliente = cep_cliente;
    }

    public String getTelefone_cliente() {
        return telefone_cliente;
    }

    public void setTelefone_cliente(String telefone_cliente) {
        this.telefone_cliente = telefone_cliente;
    }

    public String getCelular_cliente() {
        return celular_cliente;
    }

    public void setCelular_cliente(String celular_cliente) {
        this.celular_cliente = celular_cliente;
    }

    public String getObservacao_cliente() {
        return observacao_cliente;
    }

    public void setObservacao_cliente(String observacao_cliente) {
        this.observacao_cliente = observacao_cliente;
    }
}

