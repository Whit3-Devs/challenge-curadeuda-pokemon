import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Favorites from './views/Favorites';
import Home from './views/Home';
import PokemonDetail from './views/PokemonDetail';
import PokemonsList from './views/PokemonsList';

const App = () => {
	const location = useLocation();
	return (
		<>
			{location.pathname !== '/' && <Header />}
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='pokemons' element={<PokemonsList />} />
					<Route path='pokemons/:pokemonId' element={<PokemonDetail />} />
					<Route path='favorites' element={<Favorites />} />
				</Routes>
		</>
	);
};

export default App;
