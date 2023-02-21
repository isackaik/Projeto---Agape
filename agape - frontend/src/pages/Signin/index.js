import React, { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "../../assets/agape_img.png";
import img2 from "../../assets/agape-logo-enterprise.png"


const Signin = () => {
  
  
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!id | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(id, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <img src={img} alt="foto logo_agape" width="40%" height="80%"/>
      
      <C.Content>
      <C.Label><img src={img2} alt="Ágape Sistemas" width="160px" /></C.Label>
        <Input
          type="id"
          placeholder="Identificação do usuário: "
          value={id}
          onChange={(e) => [setId(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Senha: "
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <Button Text="Cancelar" onClick={handleLogin} />
        <C.LabelSignup>
          Não é um usuário?
          <C.Strong>
            <Link to="/signup">&nbsp;Cadastre-se!</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;