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
				<div className={style.svgStar}>
					<StarSvg
						width={'20px'}
						height={'20px'}
						color={'var(--background-lightblue)'}
					/>
				</div>
			</div>
		</div>
	);
};

export default CardPokemon;
