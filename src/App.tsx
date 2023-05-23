import React from 'react';
import { Page } from './Components/Page';
import { NavBar } from './Components/Nav';

function App() {
  return (
    <>
      <NavBar/>
      <Page/>
    </>
  );
}

export default App;

/* import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  background: red;
  width: 600px;
  height: 600px;
  display: flex;
`;

function App() {
  return <StyledDiv>Conteúdo da div</StyledDiv>;
}

export default App; */
