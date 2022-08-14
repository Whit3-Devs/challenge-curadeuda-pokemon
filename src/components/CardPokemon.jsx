import style from '../assets/css/components/CardPokemon.module.css';
import StarSvg from '../assets/svg/StarSvg';
import { capitalizeName } from '../helpers/capitalizeNames';

const CardPokemon = ({ id, name, image, onNavigationDetailPokemon }) => {
	return (
		<div className={style.cardPokemon}>
			<img
				src={image}
				alt={`Imagen del ${name}`}
				className={style.imagePokemon}
				onClick={() => {
					onNavigationDetailPokemon(id);
				}}
			/>
			<div className={style.containerButtons}>
				<h2 className={style.namePokemon}>{capitalizeName(name)}</h2>
				<StarSvg
					width={'0.7rem'}
					height={'0.7rem'}
					color={'var(--background-light)'}
				/>
			</div>
		</div>
	);
};

export default CardPokemon;
