import React, { useState, useEffect } from 'react';
import "./Store.css"

import api from '../services/api';

const url = "https://pokeapi.co/api/v2/pokemon/"

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonInfo {
    name: string;
    front_default:string;
    id:string;
}



const Store: React.FC = () => {

    const [pokemon,setPokemon] = useState([])

    useEffect(()=>{
        getPokemonList()

    },[])

    async function getPokemonList()  {
        const response = await api.get(url)
        const data= response.data
        const pokemonList = data.results
        await Promise.all(pokemonList.map((pokemon:Pokemon) => loadPokemon(pokemon.name))).then(item => setPokemon(item as any))


    }


    async function loadPokemon(pokemonName:any)  {
        const newResponse = await api.get(`${url}${pokemonName}`)
        const { name , sprites:{front_default}, id } = newResponse.data


        return {name, front_default, id}

    }



    function buy(name:any){
        console.log(`comprou ${name}`)
    }


    return (
        <>
        <h1>STORE</h1>
        <div className="Card">
        {pokemon.map((pokemon:PokemonInfo) =>
        <div className="Pokemon" key={pokemon.name}>

            <img src={pokemon.front_default} alt={pokemon.name}></img>
            <h2 >{pokemon.id}</h2>
            <h2 >{pokemon.name}</h2>
            <button onClick={()=>buy(pokemon.name)}>Comprar!</button>
        </div>
         )}

        </div>

        <button onClick={()=>getPokemonList()}> Clica</button>

        </>
    )
}

export default Store;
