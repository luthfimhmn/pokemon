const initialState = {
    data: [],
    loading:false,
    error: null,
    pokemon: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'myPokemons/setMyPokemon':
            return {...state,pokemon:action.payload}
        case 'myPokemons/addMyPokemons':
            return {...state, data: [...state.data , action.payload]}
        case 'myPokemons/releaseMyPokemon': 
            return {...state, data: state.data.filter(pokemon => pokemon.id !== action.payload.id)}
        case 'myPokemons/renameMyPokemon':
            const index = state.data.findIndex(pokemon => pokemon.id === action.payload.id)
            return {...state, data: [...state.slice(0,index), {...state[index], renamedTimes: +1 }, ...state.slice(index+1)]}
        default: return state
    }
}