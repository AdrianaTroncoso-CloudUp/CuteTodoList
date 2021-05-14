import React,{useState, useEffect} from 'react'
import axios from 'axios'

const PokeApiCall = () => {
    const [llamarPokes, setllamarPokes] = useState([]);
    const [idPoke, setIdPoke] =useState([]);
    const [btnClick, setBtnClick] = useState(false);

    function handleChange (e){
        setIdPoke([e.target.value])
        // setllamarPokes(e.target.value);
        // setBtnClick(false);
        // // traerPokes(id);
        
    }

        useEffect((id) => {
            
            console.log(`id ${idPoke}`);
            console.log(llamarPokes);
            btnClick == true ?
                // axios.get(`https://pokeapi.co/api/v2/pokemon/149`)
                axios.get(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
                .then(function (response) {
                    setllamarPokes(response.data);
                    // handle success
                    // console.log(response);
                    console.log(llamarPokes)
                    setBtnClick(false);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })      
            : console.log("No se escribió un Id")

        },

    )
    


    return(
        <div>
            <input onChange={handleChange}></input>
            <button onClick={() => setBtnClick(true)}>Buscar Pokemon</button>
            {llamarPokes.length > 0
            ?<>
            <div>
                <h1>Estado: {llamarPokes.name}</h1>
                <div><img src={llamarPokes.sprites.front_default}/></div>
            </div>
            </>
            : <h1>Pokemon no cargado</h1>}
            
        </div>
    )


    
}

export default PokeApiCall