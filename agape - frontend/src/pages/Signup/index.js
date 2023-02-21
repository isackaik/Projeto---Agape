import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import img from "../../assets/agape_img.png";
import img2 from "../../assets/agape-logo-enterprise.png"

const Signup = () => {
  const [id, setId] = useState("");
  const [idConf, setIdConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!id | !idConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (id !== idConf) {
      setError("Os identificadores não são iguais");
      return;
    }

    const res = signup(id, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
      <img src={img} alt="foto logo_agape" width="40%" height="80%" />
      <C.Content>
        <C.Label><img src={img2} alt="Ágape Sistemas" width="160px" /></C.Label>
        <C.Label>Cadastro de Usuário</C.Label>
        <Input
          type="id"
          placeholder="Identificador do usuário"
          value={id}
          onChange={(e) => [setId(e.target.value), setError("")]}
        />
        <Input
          type="id"
          placeholder="Confirme seu identificador"
          value={idConf}
          onChange={(e) => [setIdConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;