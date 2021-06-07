import React from 'react';

import styled from '@emotion/styled';

const Pprice = styled.p `
	color: #fff;
	text-align: left;
	font-family: 'Bebas Neue', cursiva;
	font-size: 2rem;
`;

const P = styled.p `
	color: #fff;
	text-align: left;
	font-family: 'Bebas Neue', cursiva;
	font-size: 1rem;
`;

const Span = styled.span `
	margin-left: 0.3rem;

`;

const Quotation = ({responseQuotation}) => {
	
	if(Object.keys(responseQuotation).length === 0) return null; 

	return (
		<div>
			<Pprice>El Precio es: <Span>{responseQuotation.PRICE}</Span></Pprice>
			<P>Precio más alto del día: <Span>{responseQuotation.HIGHDAY}</Span></P>
			<P>Precio más bajo del día: <Span>{responseQuotation.LOWDAY}</Span></P>
			<P>Variación útilma 24hs: <Span>{responseQuotation.CHANGEPCT24HOUR}</Span></P>
			<P>Última actualización: <Span>{responseQuotation.LASTUPDATE}</Span></P>
		</div>
	)
}

export default Quotation