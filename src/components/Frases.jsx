import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;


    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 5rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Frases = ({frase}) => {
    const {author, quote} = frase
    return ( 
        <Container>
            <h1 style={{fontSize: 20}} >{quote}</h1>
            <p>{author}</p>
        </Container>
     );
}
 
export default Frases;