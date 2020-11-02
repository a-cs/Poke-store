import React, { useState, useEffect } from 'react';
import './Store.css';
import loadingGif from '../../assets/loading.gif';

import api from '../../services/api';

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
  const [pokemonObject, setPokemonObject] = useState([]);
  const initialPageUrl = 'https://pokeapi.co/api/v2/pokemon';
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadPokemon(pokemonUrl: string): Promise<PokemonInfo> {
    const newResponse = await api.get(`${pokemonUrl}`);
    const {
      name,
      sprites: { front_default },
      id,
    } = newResponse.data;

    return { name, front_default, id };
  }
  useEffect(() => {
    async function getPokemonList(): Promise<void> {
      const response = await api.get(initialPageUrl);
      const { data } = response;
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      const pokemonList = data.results;
      await Promise.all(
        pokemonList.map((pokemons: Pokemon) => loadPokemon(pokemons.url)),
      ).then(item => setPokemonObject(item as any));
      setLoading(false);
    }
    getPokemonList();
  }, []);

  const next = async (): Promise<void> => {
    setLoading(true);
    const response = await api.get(nextUrl);
    const { data } = response;
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    const pokemonList = data.results;
    await Promise.all(
      pokemonList.map((pokemons: Pokemon) => loadPokemon(pokemons.url)),
    ).then(item => setPokemonObject(item as any));
    setLoading(false);
  };

  const prev = async (): Promise<void> => {
    if (!prevUrl) return;
    setLoading(true);
    const response = await api.get(prevUrl);
    const { data } = response;
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    const pokemonList = data.results;
    await Promise.all(
      pokemonList.map((pokemons: Pokemon) => loadPokemon(pokemons.url)),
    ).then(item => setPokemonObject(item as any));
    setLoading(false);
  };

  function buy(name: string): any {
    console.log(`comprou ${name}`);
  }

  return (
    <>
      <h1>STORE</h1>
      <div>
        {loading ? (
          <div className="Loading">
            <img src={loadingGif} alt="Loading..." />
            <h1 style={{ textAlign: 'center' }}>Loading</h1>
          </div>
        ) : (
          <>
            <div className="btn">
              <button onClick={prev} type="button">
                Prev
              </button>
              <button onClick={next} type="button">
                Next
              </button>
            </div>
            <div className="Card">
              {pokemonObject.map((pokemon: PokemonInfo) => (
                <div className="Pokemon" key={pokemon.name}>
                  <img src={pokemon.front_default} alt={pokemon.name} />
                  <h2>{pokemon.id}</h2>
                  <h2>{pokemon.name}</h2>
                  <button onClick={() => buy(pokemon.name)} type="button">
                    Comprar!
                  </button>
                </div>
              ))}
            </div>

            <div className="btn">
              <button onClick={prev} type="button">
                Prev
              </button>
              <button onClick={next} type="button">
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Store;
