import React,{ useState, useEffect } from 'react';
import Form from './components/Form';
import Quotation from './components/Quotation';
import Spinner from './components/Spinner';

import axios from 'axios';

import styled from '@emotion/styled';
import image from './assets/cryptomonedas.png';

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
`;

const Image = styled.img `
    width: 100%;
    height: auto; 
    margin-top: 5rem;
`;

const Heading = styled.h1 `
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin: 50px 0 50px;

    &::after {
      content: '';
      max-width: 100px;
      height: 6px;
      background-color: #66A2FE;
      display: block ;
    }
`;

function App() {

  const [moneda, setMoneda] = useState('');
  const [cryptomoneda, setCryptomoneda] = useState('');
  const [loading, setLoading] = useState(false);

  // State consulta
  const [responseQuotation, setResponseQuotation] = useState({});

  useEffect(() => {
    if(moneda === '' || cryptomoneda === '') return;
    
    // consulting API
    const requestAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`;
      const response = await axios.get(url);

      setLoading(true);

      setTimeout(() => {
        
        // reset Spinner
        setLoading(false);

        //show response
        setResponseQuotation(response.data.DISPLAY[cryptomoneda][moneda]);

      }, 3000);

       
    }
    
    requestAPI();

  }, [moneda, cryptomoneda])

  const Component = (loading) ? <Spinner/> : ( <Quotation responseQuotation={responseQuotation} /> );

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt="cryptomonedas"
        />
      </div>
      <div>
        <Heading>Cotiza Cryptomonedas al Instante</Heading>
        <Form
          setCryptomoneda={setCryptomoneda}
          setMoneda={setMoneda}

        />

        {Component}

      </div>

    </Container>

  );
}

export default App;
