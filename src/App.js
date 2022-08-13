import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import PokemonsList from './views/PokemonsList';
import Pokemon from './views/Pokemon';
// import Header from './components/Header';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/pokemons' element={<PokemonsList />}>
					<Route path=':pokemonId' element={<Pokemon />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
