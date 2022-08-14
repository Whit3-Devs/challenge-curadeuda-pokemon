import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailPokemon } from '../store/slice/pokemonSlice';
const PokemonDetail = () => {
	const { pokemonId } = useParams();
	const dispatch = useDispatch();
	const pokemon = useSelector(state => state.pokemons.detailPokemon);

	useEffect(() => {
		dispatch(fetchDetailPokemon(pokemonId));
	}, []);

	return (
		<div>
			<h2>{pokemon.name} {pokemon.image}</h2>
			<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`} alt="Imagen del poquemon" />
		</div>
	);
};

export default PokemonDetail;
