import { useNavigate } from 'react-router-dom';
import style from '../assets/css/components/ListPokemons.module.css';
import CardPokemon from './CardPokemon';

const ListPokemons = ({ listPokemons }) => {
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

export default ListPokemons;
