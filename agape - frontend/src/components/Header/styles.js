import styled from 'styled-components';

export const Container = styled.div`
  height: 4.2rem;
  width: 100%;
  display: flex;
  background-color: #04709F; 
  box-shadow: 0 0 20px 3px;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
  }
`;