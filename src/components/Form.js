import React from 'react'
import useMoneda from '../hooks/useMoneda';
import useCryptomoneda from '../hooks/useCryptomoneda';  
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

const Form = () => {

    const initState = '';
    const Options = [
        {cod: 'ARS', name: 'Peso Argentino'},
        {cod: 'USD', name: 'Dolar Estados Unidos'},
        {cod: 'MXN', name: 'Peso Mexicano'},
        {cod: 'EUR', name: 'Euro'},
        {cod: 'GBP', name: 'Libra Esterlina'}
    ]
    
    // Utilizar useMoneda
   
    const [ moneda, SelectorMonedas ] = useMoneda(initState, 'Elige tu moneda', Options);
    
    
    // use useCryptomonedas
    const [cryptomoneda, SelectorCryptomoneda] = useCryptomoneda();
    return (
        <form>
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
