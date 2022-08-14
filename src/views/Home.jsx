import style from '../assets/css/views/Home.module.css';
import logoPokemon from '../assets/images/logopokemon.png';
import charactersPokemon from '../assets/images/characters.webp';
import SearchSvg from '../assets/svg/SearchSvg';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigator = useNavigate()

  function onNavigate(){
    navigator('/pokemons')
  }

	return (
		<div className={style.container}>
			<img src={logoPokemon} alt='Pokemon Logo' className={style.logoPokemon} />
			<div className={style.containerImage}>
				<h2 className={style.title}>¡Encuentralos a todos!</h2>
				<img
					src={charactersPokemon}
					alt='Personajes de Pokemon en 3d'
					className={style.charactersImage}
				/>
			</div>
			<div className={style.containerText}>
				<p className={style.text}>
					Pokemon es una franquicia de medios que originalmente comenzó como un
					videojuego RPG comenzando con la primera generación que tan solo
					existían 151 pokemones. Actualmente y debido a su popularidad, se
					puede encontrar mas de 890 pokemones y creciendo.
				</p>
				<button className={style.button} onClick={onNavigate}>
					Buscar Pokemon
					<SearchSvg width={'20px'} height={'20px'} color={'white'} />
				</button>
			</div>
		</div>
	);
};

export default Home;
