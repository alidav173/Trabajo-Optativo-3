import React from 'react';
import {Link} from "react-router-dom";
import './Perfil.css';



function Perfil({datos}){
    
       return(
        <div className="pagina">
             <div className="contenedor">
            <h2>Amigo que quizás conozcas</h2>
            <div>
                <label className="etiqueta">Nombre: </label>
                {datos.name}
                </div>
            <div>
            <label className="etiqueta">Apellido: </label>
                {datos.surname}
                </div>
            <div>
            <img src={datos.photo} /> 
            </div>
            </div>
        </div>
    )
}

export default Perfil;