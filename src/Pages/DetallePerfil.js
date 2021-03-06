import React, {useState, useEffect} from 'react';

function DetallePerfil(props){
    

    const [datos, setDatos] = useState({});
    useEffect(
        () => {
            fetch("https://my-json-server.typicode.com/alidav173/perfiles/todos"+props.match.params.id)
            .then(res=>res.json())
            .then(
                (result)=>{
                    console.log(result)
                    setDatos(result)
                },
                (error) => {
                    console.log("Error")
                }
            )
    }, []); 
    
        
        
        
        
        
    
    return(
        <div>
            {datos.name}
        </div>
    )
}

export default DetallePerfil;