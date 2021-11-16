import React, { useState, useEffect } from 'react';
import Frases from './components/Frases';

import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [frase, getFrase] = useState({})

  const fetchFrase = async() => {
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await response.json()
    getFrase(frase[0])
  }

  // initialize frase
  useEffect(() => {
    fetchFrase();
  }, []);

  return (
    <Container>
      <Frases
        frase={frase}
      />
      <Boton
        onClick={fetchFrase}
      >
        Obtener frase
      </Boton>
    </Container>
  );
}

export default App;
