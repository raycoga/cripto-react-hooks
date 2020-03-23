import React,{useState,useEffect} from 'react';
import Formulario from './componentes/Formulario'
import Cotizacion from './componentes/Cotizacion'
import Spinner from './componentes/Spinner'
import styled from '@emotion/styled';
import imagen from './image.png'
import axios from 'axios'
const Contenedor = styled.div`
max-width:900px;
margin:0 auto;
@media(min-width:992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
}
`
const Imagen = styled.img`
max-width:100%;
margin-top:5rem;
`
const Heading = styled.h1`
font-family: 'Bebas Neue', cursive;
color: #FFF;
text-align:left;
font-weight:700;
font-size:50px;
margin-bottom:50px;
margin-top:80px;
&::after{
  content:'';
  width:100px;
  height:6px;
  background-color:#66A2FE;
  display:block;
}
`
function App() {

  const[moneda,guardarMoneda]=useState('');
  const [criptomoneda,GuardarCriptomoneda]=useState('');
  const [resultado ,guardarResultado]=useState({});
  const [Cargando ,guardarCargando]=useState(false);
useEffect(() => {
if(moneda==='')  return
const cotizarCriptomoneda =async ()=>{
  await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`)
  .then((result)=>{
    guardarCargando(true)
    setTimeout(() => {
      guardarCargando(false)
      guardarResultado(result.data.DISPLAY[criptomoneda][moneda])
    }, 3000);

  }).catch((error)=>{
      console.log(error)
  })
}
cotizarCriptomoneda()
}, [moneda,criptomoneda]);

const componente = Cargando ? <Spinner/>:  <Cotizacion resultado={resultado}/>

  return (
   <Contenedor>
     <div>
        <Imagen
          src={imagen}
          alt='imagen-crypto'
        />
     </div>
     <div>
        <Heading>
          Cotiza crypto monedas al instante
        </Heading>
        <Formulario guardarMoneda={guardarMoneda} GuardarCriptomoneda={GuardarCriptomoneda}/>
    {componente}
     </div>
   </Contenedor>
  );
}

export default App;
