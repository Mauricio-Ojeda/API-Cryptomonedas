import React from 'react';
import styled from '@emotion/styled';

const StyledError = styled.p `
    color: #fff;
    font-size: 2rem;
    background-color: #b7322c;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursiva;
`

const Error = ({mensaje}) => {
	return (
		<StyledError>{mensaje}</StyledError>		
	)
}

export default Error