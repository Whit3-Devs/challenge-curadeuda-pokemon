import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Link to={'/'}>
        Home
      </Link>
      <Link to={'/pokemons'}>
        Pokemons
      </Link>
      <Link to={'/favorites'}>
        Favorites
      </Link>
    </div>
  )
}

export default Header