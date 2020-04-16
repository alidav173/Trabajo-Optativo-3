import React from 'react';
import {Link} from "react-router-dom";
function Menu(){

    return(
        <div>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/Todoform'}>Registro</Link></div>  
            <div><Link to={'/Login'}>Login</Link></div>        
        </div>
    )
}

export default Menu;