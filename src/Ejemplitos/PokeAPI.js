import React,{useState, useEffect, useRef, createRef} from 'react'
import axios from 'axios'

const PokeAPI = (props) => {
    const [llamarPokes, setllamarPokes] = useState([]);
    const [idPoke, setIdPoke] =useState([]);
    const inputPoke = React.createRef();

    const handleChange = () => {
        const pokemon = inputPoke.current.value
        pokemon != (null || 0) ?
        setIdPoke(pokemon) :
        console.log('Input: ',idPoke );  
    }

    useEffect(() => {
        
        console.log(`id ${idPoke}`);
        console.log('Pokes', llamarPokes);

        // axios.get(`https://pokeapi.co/api/v2/pokemon/149`)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
        .then(function (response) {
            setllamarPokes(response.data);
            // handle success
            // console.log(response);
            console.log('Poke obtenido: ',llamarPokes)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })      

    },[idPoke])
    


    return(
        <div>
            <input ref={inputPoke}></input>
            <button onClick={handleChange}>Buscar Pokemon</button>
            {console.log('Imprimier Poke obtenido: ',llamarPokes)}
            {console.log('IdPoke... : ',idPoke)}
            {(idPoke == null || idPoke.length === 0 )?
            <h1>Pokemon no cargado</h1> :
            ((llamarPokes.name == null || llamarPokes.name.length === 0 ) ? 
             <h1>Pokemon no cargado.</h1> :
            <>
            <div>
                <h1>Estado: {llamarPokes.name}</h1>
                <div><img src={llamarPokes.sprites.front_default}/></div>
            </div>
            </>)
            
            }
            
        </div>
    )


    
}

export default PokeAPI