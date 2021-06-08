import React from 'react';
import bitcoinGif from '../assets/loader.svg'
import styled from '@emotion/styled';

const Container = styled.div`
    margin: 2rem auto;
    width: 100%;
    text-align: center;
`

const Spinner = () => {
    return (
        
        <Container>
        
            <img src={bitcoinGif} alt="Circle"/>

        </Container>
        
    )
}

export default Spinner
