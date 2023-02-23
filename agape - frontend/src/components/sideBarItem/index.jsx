import React from 'react';
import { Container } from './styles';

const SidebarItem = ({ Icon, Text, Icon2 }) => {
  return (
    <Container>
      <Icon />
      {Text}
      <Icon2 />
    </Container>
  )
}

export default SidebarItem;