import React from "react";
import Header from "../../components/Header";
import CadastroClientes from "../Cadastro";
import * as C from "./styles";
const Home = () => {

  return (
    <C.Container>
      <Header />
      <CadastroClientes />
    </C.Container>
  );
};

export default Home;