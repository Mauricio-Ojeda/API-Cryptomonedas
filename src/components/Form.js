import React, { useEffect, useState } from 'react';
import Error from './Error';

import useMoneda from '../hooks/useMoneda';
import useCryptomoneda from '../hooks/useCryptomoneda';  
import axios from 'axios';

import styled from '@emotion/styled';

const Button = styled.input `
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease-in-out;
    text-align: center;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;



const Form = ({setMoneda, setCryptomoneda}) => {

    // State list Cryptomonedas

    const [arrayCryto, setArrayCrypto] = useState([]);

    const [error, setError] = useState(false)

    
    const Options = [
        {cod: 'ARS', name: 'Peso Argentino'},
        {cod: 'USD', name: 'Dolar Estados Unidos'},
        {cod: 'MXN', name: 'Peso Mexicano'},
        {cod: 'EUR', name: 'Euro'},
        {cod: 'GBP', name: 'Libra Esterlina'}
    ]
    
    // Utilizar useMoneda
   
    const [ moneda, SelectorMonedas ] = useMoneda('', 'Elige tu moneda', Options);

       
    // use useCryptomonedas
    const [cryptomoneda, SelectorCryptomoneda] = useCryptomoneda('', 'Elige tu Cryptomoneda', arrayCryto);

    
    // Call API Cryptocompare

    useEffect(() => {
        const requestAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=ARS`;
            const response = await axios.get(url);
            setArrayCrypto(response.data.Data);
        }
        requestAPI();
    }, [])

    const cotizarMoneda = e => {
        e.preventDefault();

        // Validation
        if(moneda === '' || cryptomoneda === ''){
            setError(true);
            return;
        }
       
        // reset state validation
        setError(false);

        // Pass data to app
        setMoneda(moneda);
        setCryptomoneda(cryptomoneda);
    }

    return (
        <form
            onSubmit= {cotizarMoneda}
        >

            {error ? <Error mensaje="Hay un Error" /> :  null}

            <SelectorMonedas 

            />

            <SelectorCryptomoneda

            />
            
            <Button
                type="submit"                
                value="Cotizar"
                
            />
        </form>
    )
}

export default Form
