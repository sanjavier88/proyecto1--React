import React from 'react';
import '../hoja-de-estilos/Testimonio.css'

 function Testimonio(props){
  return (
    
    // <div className="contenedor-testimonio">
    //   <img className='/imagenes/testimonio-ema.png'
    //   src={require('../imagenes/testimonio-emma.png')}
    //   alt='Foto de Emma'
    //   />
    //   <div className='contenedor-texto-testimonio'>
    //     <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
    //     <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
    //     <p className='texto-testimonio'>"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."</p>
    //   </div>

    // </div>

    <div className="contenedor-testimonio">
      <img className='/imagenes/testimonio-ema.png'
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt={(`Foto de ${props.nombre}`)}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>

    </div>
  );
}

export default Testimonio;