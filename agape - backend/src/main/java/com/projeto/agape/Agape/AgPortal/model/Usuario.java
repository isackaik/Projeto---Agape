package com.projeto.agape.Agape.AgPortal.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @Column(unique = true)
    private Long id_usuario;
    private String password_usuario;

    public Long getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Long id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getPassword_usuario() {
        return password_usuario;
    }

    public void setPassword_usuario(String password_usuario) {
        this.password_usuario = password_usuario;
    }
}

