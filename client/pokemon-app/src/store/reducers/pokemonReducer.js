const initialState = {
    data: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'myPokemons/setMyPokemons':
            return {...state,data:action.payload}
        case 'myPokemons/addMyPokemons':
            return {...state, data: [...state.data , action.payload]}
        case 'myPokemons/releaseMyPokemon': 
            return {...state, data: state.data.filter(pokemon => pokemon.id !== action.payload.id)}
        default: return state
    }
}