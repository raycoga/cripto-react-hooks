import React, { memo, useDebugValue } from 'react';
import styled from '@emotion/styled';
import useMonenda from '../hooks/useMoneda'

const Boton = styled.input`
margin-top:20px;
font-wight:bold;
font-size:20px;
padding:10px;
background-color:#66a2fe;
border:none;
width: 100%;
border-radius:10px;
color:#FFF;
transition: background-color 1s ease;
&:hover{
    background-color:#326AC0;
    cursor:pointer
}
`

const Formulario = memo(() => {
    const MONEDAS= [
        {codigo:'USD', nombre:'Dolar de Estados Unidos'},
        {codigo:'MXN', nombre:'Peso Mexicano'},
        {codigo:'EUR', nombre:'Euro'},
        {codigo:'GBP', nombre:'Libra Esterlina'}
    ]
    //Utilizar useMonena
    const[moneda,SelectMonedas] =useMonenda('Elige tu moneda','',MONEDAS)
    return (
            <form action="">
                <SelectMonedas/>
                <Boton type="submit" value="Calcular"/>
            </form>
    );
});

export default Formulario;