import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import PokemonInfo from "./PokemonInfo";
import axios from "axios";
import PokemonList from "./PokemonList";

const Main = () => {
  const dataFetch = useRef(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemonData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    if (dataFetch.current) return (dataFetch.current = true);
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card
            pokemon={pokemonData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokemonData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}
            {nextUrl && (
              <button
                onClick={() => {
                  setPokemonData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="right-content">
          <PokemonInfo data={pokeDex} />
          <PokemonList />
        </div>
      </div>
    </>
  );
};

export default Main;
