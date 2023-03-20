import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMyPokemons } from "../store/actions/pokemonAction";

const PokemonInfo = ({ data }) => {
  const myPokemons = useSelector((state) => state.pokemon.data);
  const dispatch = useDispatch();

  function addToMyPokemonList(e) {
    e.preventDefault();
    dispatch(addMyPokemons(data));
  }

  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img src={data.sprites.front_default} alt="charmander"></img>

          <div className="abilities">
            {data.abilities.map((poke, i) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke, i) => {
              return (
                <>
                  <h3>
                    {poke.stat.name}:{poke.base_stat}
                  </h3>
                </>
              );
            })}
          </div>
          <div className="btn-group-new">
            <button onClick={(e) => addToMyPokemonList(e)}>Catch</button>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonInfo;
