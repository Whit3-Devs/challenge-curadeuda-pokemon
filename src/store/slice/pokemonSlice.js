import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	list: [],
  limit: 9,
  startPage: 0,
};

export const counterSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		getPokemons: (state, action) => {
			return {
				...state,
				list: action.payload,
			};
		},
	},
});

export const { getPokemons } = counterSlice.actions;

export default counterSlice.reducer;

// const apipokemon = 'https://pokeapi.co/api/v2/pokemon?offset=9&limit=9';

export const getPokemonsList = () => {
  return (dispatch) => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=9')
    .then((res) => {
      console.log(res.data)
      return dispatch(getPokemons(res.data.results))
    })
  }
}