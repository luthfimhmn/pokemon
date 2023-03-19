import axios from 'axios';

export function setMyPokemon (payload) {
    return {
        type: 'myPokemons/setMyPokemons',
        payload
    }
}

export function addMyPokemons (payload) {
    return { 
        type: 'myPokemons/addMyPokemons',
        payload
    }
}

export function releasePokemon (payload) {
    return {
        type: 'myPokemons/releaseMyPokemon',
        payload
    }
}