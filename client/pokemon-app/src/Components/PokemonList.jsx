import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  renamePokemonAsync,
  releasePokemon,
} from "../store/actions/pokemonAction";
import axios from "axios";

const PokemonList = () => {
  const MyPokemonList = useSelector((state) => state.pokemon.data);
  const dispatch = useDispatch();

  function renamePokemon(e, dataRename) {
    e.preventDefault();
    dispatch(renamePokemonAsync(dataRename));
  }

  function releaseMyPokemon(e, dataRelease) {
    e.preventDefault();
    dispatch(releasePokemon(dataRelease));
  }

  return (
    <div className="pokemonlist">
      {!MyPokemonList.length ? "" : <h1>My Pokemon Lists</h1>}

      {MyPokemonList.map((data) => (
        <>
          <li>
            {data.name}{" "}
            <div className="btn-group-new">
              <button onClick={(e) => renamePokemon(e, data)}>Rename</button>
              <button onClick={(e) => releaseMyPokemon(e, data)}>
                Release
              </button>
            </div>
          </li>
        </>
      ))}
    </div>
  );
};

export default PokemonList;
