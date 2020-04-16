import React,{Component} from 'react';
import Perfil from '../Components/Perfil'

class Home extends Component{
    constructor(){
        super()
        this.state={
            perfiles:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        fetch("https://my-json-server.typicode.com/alidav173/perfiles/todos")
        .then(res=>res.json())
        .then(
            (result)=>{
                console.log(result)
                this.setState({
                    perfiles:result,
                    isLoaded:true
                })
            },
            (error) => {
                console.log("Error")
            }
        )
        
        
        
        
        
    }
    render(){
        if(!this.state.isLoaded){
            return (
                <div>
                    Cargando datos                
                </div>
            )
        }else{
            return(
                <div>
                    {this.state.perfiles.map(data=><Perfil datos={data} />)}
                    
                </div>
            )
        }
        
    }
}

export default Home;