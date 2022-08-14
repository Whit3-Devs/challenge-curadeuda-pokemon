import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsPagination } from '../store/slice/pokemonSlice';
import { useNavigate } from 'react-router-dom';
import style from '../assets/css/views/PokemonsList.module.css';
import CardPokemon from '../components/CardPokemon';

const PokemonsList = () => {
	const dispatch = useDispatch();
	const listPokemons = useSelector(state => state.pokemons.list);
  
	useEffect(() => {
		dispatch(getPokemonsPagination(0));
	}, []);

	useEffect(() => {
		console.log(listPokemons);
	}, [listPokemons]);

	const navigator = useNavigate();

	function onNavigationDetailPokemon(id) {
		navigator(`${id}`);
	}

	return (
		<div className={style.containerCards}>
			{listPokemons.length &&
				listPokemons.map(pokemon => {
					return (
						<CardPokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} image={pokemon.image} onNavigationDetailPokemon={onNavigationDetailPokemon}/>
					);
				})}
		</div>
	);
};

export default PokemonsList;
