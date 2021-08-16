import React from 'react'
import HomePage from './pages/HomePage'
import styled from 'styled-components';

const Header = styled.div `
background-color: #7D3996;
padding: 10px;
color: white;
`

function App() {

  return (

    <div>
     <Header>
      <p>LabeX</p>
     </Header>

      <HomePage />
   
    </div>
  );
}

export default App;
