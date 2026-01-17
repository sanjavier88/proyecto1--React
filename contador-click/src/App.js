
import './App.css';
import freecodecamplogo from './imagenes/logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);


  const manejarClic = () => {
    // console.log('clic');
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    // console.log('Reiniciar');
  
   setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
      <img
      className='freecodecamp-logo'
      src={freecodecamplogo}
      alt='Logo de freecodecamp'
       />

      </div>
      <div className='contenedor-principal'>
        <Contador
          // numClics= '5'
          numClics= {numClics}
        />
          
       
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton
         texto='Reiiciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
     
    </div>
  );
}

export default App;
