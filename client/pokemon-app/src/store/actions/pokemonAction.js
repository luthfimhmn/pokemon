import axios from 'axios';

export function setPokemon (payload) {
    return {
        type: 'pokemon/setPokemon',
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

export function renamePokemon (payload) {
    return {
        type: 'myPokemons/renameMyPokemon',
        payload
    }
}


export function renamePokemonAsync (dataPoke) {
    return async (dispatch) => {
        try {
            const result = await axios({
                method: "POST",
                url: `http://localhost:3000/pokemon/rename/${dataPoke.id}`,
                data: { number: 0}
            })
            
            dispatch(renamePokemon({...dataPoke, number:result.data.nextFib}))
        } catch (error) {
            console.log(error)
        }
    }
}