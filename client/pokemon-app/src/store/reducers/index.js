import { combineReducers } from "redux";
import pokemon from './pokemonReducer'

const reducer = combineReducers({
    pokemon
})

export default reducer;