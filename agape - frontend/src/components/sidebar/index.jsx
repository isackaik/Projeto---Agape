import React from 'react';
import { Container, Content } from './styles';
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import {
  FaTimes,
  FaHome,
  FaUserAlt,
  FaRegFileAlt,
  FaSignOutAlt,
  FaBabyCarriage
} from 'react-icons/fa';

import SidebarItem from '../sideBarItem';
import axios from 'axios';

const Sidebar = ({ active }) => {

  let relatorio; 
  function emitirRelatorio() {
    axios.get(`http://localhost:8080/clientes/relatorio`)
    .then(response => {
      console.log(response)
      relatorio = response.data;
    })
    .catch(error => console.log(error))
  };

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Início" Icon2="none" />
        <SidebarItem Icon={FaUserAlt} Text="Cadastro" Icon2={GoChevronDown}/>
        <ul>
          <SidebarItem Icon="none" Text="Cliente" Icon2="none" />
          <SidebarItem Icon="none" Text="Produto" Icon2="none" />
        </ul>
        <SidebarItem Icon={FaBabyCarriage} Text="Pedido" Icon2="none" />
        <SidebarItem Icon={FaRegFileAlt} Text="Relatório" Icon2={GoChevronDown} />
        <ul>
          <SidebarItem Icon="none" Text="Clientes" Icon2="none" name="clientes" />
          <SidebarItem Icon="none" Text="Produtos" Icon2="none" name="produtos" />
          <SidebarItem Icon="none" type="submit" Text="Pedidos" Icon2="none" name="pedidos" />
        </ul>
        <SidebarItem Icon={FaSignOutAlt} Text="Sair" Icon2="none" />
      </Content>
    </Container>
  )
}

export default Sidebar;