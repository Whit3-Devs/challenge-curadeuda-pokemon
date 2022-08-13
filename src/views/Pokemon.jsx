import { useParams } from 'react-router-dom';

const Pokemon = () => {
	const { pokemonId } = useParams();

	return <div>{pokemonId}</div>;
};

export default Pokemon;
