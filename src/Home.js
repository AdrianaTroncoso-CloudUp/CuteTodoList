

import React,{useState} from 'react'
 
function Home() {
    
    
    const [estadoDeAnimo, setEstadoDeAnimo] = useState('Feliz');
    const [showEstado, setShowEstado] = useState(false);
    let estadoDeAnimo1 = 'Feliz';
    // function cambiarEstado(e){ 
    //     setEstadoDeAnimo("Triste")
    // };
    function handleChange(e){
        setEstadoDeAnimo([e.target.value])         
        setShowEstado(false);
        console.log(`HandleChange -Estado de animo: ${e.target.value}`);
    };

    
    return (
    <div>
    <h1>Home</h1>
    <br/>
    <h1>Estado de animo:</h1>
    {showEstado?
        <h1>{estadoDeAnimo}</h1>
        :<h1>{estadoDeAnimo1}</h1>
    }
    <div>
        <input type="text" onChange={handleChange}></input>   
        <button onClick={() => setShowEstado(true)} >Cambiar</button>
    </div>


    </div>
 )


    

}
 
export default Home