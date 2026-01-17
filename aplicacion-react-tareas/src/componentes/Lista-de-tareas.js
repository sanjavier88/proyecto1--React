import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import './hojas-de-estilo/Lista-de-tareas.css';


function ListaDeTreas(){

    const [tareas, setTareas]= useState([]);

    const agregarTarea = tarea => {
      if(tarea.texto.trim()){
        tarea.texto = tarea.texto.trim();
         const tareasActualizadas = [tarea, ...tareas];
         setTareas(tareasActualizadas)
      }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(Tarea.id !== id);
        setTareas(tareasActualizadas)
    }
    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tarea-lista-contendor'>
              {
                tareas.map((tarea) =>
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                    />
                )
              }
            </div>
        
        </>
    );
}

export default ListaDeTreas;