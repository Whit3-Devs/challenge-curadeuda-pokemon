import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import PokemonDetail from './views/PokemonDetail';
import PokemonsList from './views/PokemonsList';

const App = () => {
	// const location = useLocation();
	console.log(location);
	return (
		<>
			{location.pathname !== '/' && <Header />}
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<Home />} />
					<Route path='pokemons' element={<PokemonsList />} />
					<Route path='pokemons/:pokemonId' element={<PokemonDetail />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
