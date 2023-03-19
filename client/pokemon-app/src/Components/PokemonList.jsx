import React from "react";
import { useSelector } from "react-redux";

const PokemonList = () => {
  const MyPokemonList = useSelector((state) => state.pokemon.data);

  return (
    <div className="pokemonlist">
      {!MyPokemonList.length ? "" : <h1>My Pokemon Lists</h1>}

      {MyPokemonList.map((data) => (
        <li>{data.name}</li>
      ))}
    </div>
  );
};

export default PokemonList;
