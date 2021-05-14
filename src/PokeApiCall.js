import React,{useState, useEffect} from 'react'
import axios from 'axios'

const PokeApiCall = (props) => {
    const [llamarPokes, setllamarPokes] = useState([]);
    const [idPoke, setIdPoke] =useState([]);
    const [inputPoke, setInputPoke] = useState();

    function handleChange (e){
        setInputPoke([e.target.value])
        console.log('Input: ',inputPoke );
        // setllamarPokes(e.target.value);
        // setBtnClick(false);
        // // traerPokes(id);       
    }

    const handleSubmit = (e, inputPoke) =>{
        e.preventDefault();
        setIdPoke(inputPoke)
        console.log('idPoke: ',idPoke );
        // props.onSubmit({
        //     idPoke: input
        // })
    }

        useEffect((idPoke) => {
            
            console.log(`id ${idPoke}`);
            console.log('Pokes', llamarPokes);

            // axios.get(`https://pokeapi.co/api/v2/pokemon/149`)
            axios.get(`https://pokeapi.co/api/v2/pokemon/${idPoke}`)
            .then(function (response) {
                setllamarPokes(response.data);
                // handle success
                // console.log(response);
                console.log(llamarPokes)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })      

        },

    )
    


    return(
        <div>
            <input onChange={handleChange} value={inputPoke}></input>
            <button onClick={handleSubmit}>Buscar Pokemon</button>
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