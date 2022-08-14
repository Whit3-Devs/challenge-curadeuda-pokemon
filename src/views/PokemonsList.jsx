import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListPokemons from '../components/ListPokemons';
import { getPokemonsPagination } from '../store/slice/pokemonSlice';

const PokemonsList = () => {
	const dispatch = useDispatch();
	const listPokemons = useSelector(state => state.pokemons.list);
  


	useEffect(() => {
		dispatch(getPokemonsPagination(0));
	}, []);

	useEffect(() => {
		console.log(listPokemons);
	}, [listPokemons]);

	return (
		<div>
			<ListPokemons listPokemons={listPokemons} />
		</div>
	);
};

export default PokemonsList;
