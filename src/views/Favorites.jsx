import { useSelector } from 'react-redux';
import CardPokemon from '../components/CardPokemon';

const Favorites = () => {
	const favorites = useSelector(state => state.pokemons.favorites);

	return (
		<div>
			{favorites.length &&
				favorites.map(pokemon => {
					return (
						<CardPokemon
							key={pokemon.id}
							id={pokemon.id}
							name={pokemon.name}
							image={pokemon.image}
						/>
					);
				})}
		</div>
	);
};

export default Favorites;
