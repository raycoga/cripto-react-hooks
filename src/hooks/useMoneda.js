import React,{Fragment,useState} from 'react';
import styled from '@emotion/styled';
const Label = styled.label`
font-family: 'Bebas Neue', cursive;
color:#FFF;
text-transform:uppercase;
font-wight:bold;
font-size:2.4rem;
margin-top:2rem;
display:block;
`
const Select = styled.select`
width:100%;
display:block;
padding:1rem;
-webkit-appearance:none;
border-radius:10px;
border:none;
font-size:1.2rem
`
const useMoneda = (label,stateInicial,opciones) => {
    //state del custom hooks
    const [state, actualizarState]=useState(stateInicial)

    const Seleccionar = () => ( 
        <Fragment>
            <Label >{label}</Label>
            <Select onChange={e=>actualizarState(e.target.value)}
            value={state} >
                <option value=''>- Seleccione -</option>
                {opciones.map( res => <option key={res.codigo} value={res.codigo}>{res.nombre}</option>)}
            </Select>
        </Fragment>
    )
   
    //Retornar state, iterfaz y fn que modifica el state
    return[state, Seleccionar, actualizarState];
};

export default useMoneda;