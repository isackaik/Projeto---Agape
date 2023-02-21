import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";
import CadastroClientes from "../Cadastro";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <Header />
      <CadastroClientes />
      {/*}
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
  */}
    </C.Container>
  );
};

export default Home;