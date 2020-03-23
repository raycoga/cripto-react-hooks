import React, { memo } from 'react';
import styled from '@emotion/styled';
const ResultadoDiv = styled.div`
font-family: 'Bebas Neue', cursive;
color:#FFF;
text-transform:uppercase;
font-wight:bold;
font-size:2.4rem;
margin-top:2rem;
display:block;
`
const Info = styled.p`
font-size:18px;
span{
    font-weight:bold;
}
`
const Precio = styled.label`
font-size:30px;
span{
    font-weight:bold;
}

`
const Cotizacion = memo(({resultado}) => {
    if(Object.keys(resultado).length===0) return null
    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    );
});

export default Cotizacion;