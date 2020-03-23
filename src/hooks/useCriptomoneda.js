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
const useCriptomoneda = (label,stateInicial,opciones) => {
    //state del custom hooks
    const [state, actualizarState]=useState(stateInicial)
   
    const SelectCripto = () => ( 
        <Fragment>
            <Label >{label}</Label>
            <Select onChange={e=>actualizarState(e.target.value)}
            value={state} >
                 <option value=''>- Seleccione -</option>
                 {opciones.map( res => <option key={res.CoinInfo.id} value={res.CoinInfo.Name}>{res.CoinInfo.FullName}</option>)}
            </Select>
        </Fragment>
    )
   
    //Retornar state, iterfaz y fn que modifica el state
    return[state, SelectCripto, actualizarState];
};

export default useCriptomoneda;