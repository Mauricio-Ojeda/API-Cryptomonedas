import React, { Fragment, useState } from 'react';

import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    margin-top: 2rem;
    text-transform: uppercase;
    font-size: 2.4rem;
    display: block;
`;

const Select =styled.select `
    width: 100%;
    display: block;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    text-align:center;
    -webkit-appearance: none;
    font-size: 1.1rem;
`;

const useMoneda = (initState, label, options) => {

    // State de nuestro custom hook
    const [state, setstate] = useState({initState});

    const SelecteMoneda = () => (
        
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setstate(e.target.value)}
                value={state}
            >
                <option value=''>--- Seleccionar ---</option>
                {options.map(option =>( <option key={option.cod} value={option.cod}>{option.name}</option>))}                 
            </Select>
        </Fragment>

    )

    return [state, SelecteMoneda, setstate];
}

export default useMoneda;
