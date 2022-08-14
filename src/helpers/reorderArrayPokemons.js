// La funcion agrega el id de los pokemones para usarlos en sus respectivas direcciones de imagenes

export function reOrderArrayPokemons(data) {
  const newData = data.map(item => {
    const idPokemon = parseInt(item.url.split('/')[6]);
    return {
      ...item, 
      id: idPokemon,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokemon}.png`
    };
  });
  return newData;
}