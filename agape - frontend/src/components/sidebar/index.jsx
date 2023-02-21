import React from 'react';
import { Container, Content } from './styles';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { 
  FaTimes, 
  FaHome, 
  FaUserAlt, 
  FaRegFileAlt,
  FaChartBar,
  FaSignOutAlt,
  FaBabyCarriage
} from 'react-icons/fa';

import SidebarItem from '../sideBarItem';

const Sidebar = ({ active }) => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar}/>  
      <Content>
        <SidebarItem Icon={FaHome} Text="Início" />
        <SidebarItem Icon={FaUserAlt} Text="Cadastro" />
        <SidebarItem Icon={FaBabyCarriage} Text="Pedido" />
        <SidebarItem Icon={FaRegFileAlt} Text="Relatório" />
        <SidebarItem Icon={FaSignOutAlt} Text="Sair" />
      </Content>
    </Container>
  )
}

export default Sidebar;