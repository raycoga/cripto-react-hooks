import React, { memo, useEffect,useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios'
import useMonenda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import Error from './Error'
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

const Formulario = memo(({GuardarCriptomoneda,guardarMoneda}) => {
    const [listacripto, guardarCriptomonedas]= useState([])
    const [error, guardarError]=useState(false)
    const MONEDAS= [
        {codigo:'USD', nombre:'Dolar de Estados Unidos'},
        {codigo:'MXN', nombre:'Peso Mexicano'},
        {codigo:'EUR', nombre:'Euro'},
        {codigo:'GBP', nombre:'Libra Esterlina'},
        {codigo:'VES', nombre:'Bolivar Soberano'}
    ]
    //Utilizar useMonena
    const[moneda,SelectMonedas] =useMonenda('Elige tu moneda','',MONEDAS)
    //Utilizar useCriptomoneda
    const[criptomoneda,SelectCripto] =useCriptomoneda('Elige tu Criptomenda','',listacripto)

// ejecutar llamado a la api
useEffect(() => {
const consultarAPI= async ()=>{
    if(moneda!==''){
        await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${moneda}`)
        .then((result)=>{
            console.log(result)
            guardarCriptomonedas(result.data.Data)
        }).catch((error)=>{
            console.log(error)
        })
    }
}
consultarAPI()
}, [moneda]);

const cotizarMoneda =e=>{
    e.preventDefault();
    //validar si ambos campos estan llenos
    if(moneda ==='' || criptomoneda===''){
        guardarError(true)
        return
    }else{
        guardarError(false)
        guardarMoneda(moneda)
        GuardarCriptomoneda(criptomoneda)
    }
}

    return (
            <form onSubmit={e=>cotizarMoneda(e)}>
                {error ? <Error mensaje={"Todos los campos son obligatorios"}/>:null}
                <SelectMonedas/>
                <SelectCripto/>
                <Boton type="submit" value="Calcular"/>
            </form>
    );
});

export default Formulario;