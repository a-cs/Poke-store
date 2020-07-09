import React, { useState, useEffect } from 'react';
import "./Store.css"
import loadingGif from "../assets/loading.gif"

import api from '../services/api';


interface Pokemon {
    name: string;
    url: string;
}

interface PokemonInfo {
    name: string;
    front_default: string;
    id: string;
}



const Store: React.FC = () => {

    const [pokemon, setPokemon] = useState([])
    const initialPageUrl  = "https://pokeapi.co/api/v2/pokemon"
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getPokemonList() {
            const response = await api.get(initialPageUrl)
            const data = response.data
            setNextUrl(data.next);
            setPrevUrl(data.previous);
            const pokemonList = data.results
            await Promise.all(pokemonList.map((pokemon: Pokemon) => loadPokemon(pokemon.url))).then(item => setPokemon(item as any))
            setLoading(false);


        }
        getPokemonList()

    }, [])

    const next = async () => {
        setLoading(true);
        const response = await api.get(nextUrl);
        const data = response.data
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        const pokemonList = data.results
        await Promise.all(pokemonList.map((pokemon: Pokemon) => loadPokemon(pokemon.url))).then(item => setPokemon(item as any))
        setLoading(false);
    }

    const prev = async () => {
        if (!prevUrl) return;
        setLoading(true);
        const response = await api.get(prevUrl);
        const data = response.data
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        const pokemonList = data.results
        await Promise.all(pokemonList.map((pokemon: Pokemon) => loadPokemon(pokemon.url))).then(item => setPokemon(item as any))
        setLoading(false);
    }



    async function loadPokemon(pokemonUrl: any) {
        const newResponse = await api.get(`${pokemonUrl}`)
        const { name, sprites: { front_default }, id } = newResponse.data


        return { name, front_default, id }

    }



    function buy(name: any) {
        console.log(`comprou ${name}`)
    }


    return (
        <>
            <h1>STORE</h1>
            <div>
                {loading ?
                <div className="Loading">
                <img src={loadingGif} alt="Loading..."/>
                <h1 style={{ textAlign: 'center' }}>Loading</h1>
                </div>: (
                    <>
                        <div className="btn">
                            <button onClick={prev}>Prev</button>
                            <button onClick={next}>Next</button>
                        </div>
                        <div className="Card">
                            {pokemon.map((pokemon: PokemonInfo) =>
                                <div className="Pokemon" key={pokemon.name}>

                                    <img src={pokemon.front_default} alt={pokemon.name}></img>
                                    <h2 >{pokemon.id}</h2>
                                    <h2 >{pokemon.name}</h2>
                                    <button onClick={() => buy(pokemon.name)}>Comprar!</button>
                                </div>
                            )}

                        </div>

                        <div className="btn">
                            <button onClick={prev}>Prev</button>
                            <button onClick={next}>Next</button>
                        </div>
                    </>

                )}

            </div>



        </>
    )
}

export default Store;
