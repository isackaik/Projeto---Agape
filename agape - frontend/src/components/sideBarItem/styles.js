import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1A202C; 
  font-size: 20px;
  color: white;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 10px 15px;
  > svg {
    margin: 0 20px;
  }
  &:hover {
    background-color: black;
  }
`;