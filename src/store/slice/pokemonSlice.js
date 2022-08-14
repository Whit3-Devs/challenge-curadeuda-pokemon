import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { reOrderArrayPokemons } from '../../helpers/reorderArrayPokemons';

const initialState = {
	allPokemons: [],
	list: [],
	detailPokemon: {},
	favorites: []
};

export const counterSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
		getAllPokemons: (state, action) => {
			return {
				...state,
				allPokemons: action.payload,
			};
		},
		getPaginationPokemons: (state, action) => {
			return {
				...state,
				list: action.payload
			}
		},
		getDetailPokemon: (state, action) => {
			return {
				...state,
				detailPokemon: action.payload,
			}
		},
		addFavoritePokemon: (state, action) => {
			return {
				...state,
				favorites: [...state.favorites, action.payload]
			}
		}
	},
});

export const { getAllPokemons, getPaginationPokemons, getDetailPokemon, addFavoritePokemon } = counterSlice.actions;

export default counterSlice.reducer;

export const getPokemonsList = () => {
	return dispatch => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154')
			.then(res => {
				// console.log(res.data.results.length);
				return dispatch(getAllPokemons(reOrderArrayPokemons(res.data.results)));
			});
	};
};


export const getPokemonsPagination = (pagination = 0) => {
	return dispatch => {
		axios
		.get(`https://pokeapi.co/api/v2/pokemon?offset=${9 * pagination}&limit=9`)
		.then(res => {
			return dispatch(getPaginationPokemons(reOrderArrayPokemons(res.data.results)))
		})
	}
}


export const fetchDetailPokemon = (id) => {
	return dispatch => {
		axios
		.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(res => {
			return dispatch(getDetailPokemon(res.data))
		})
	}
}
