import style from '../assets/css/views/Home.module.css'
import logoPokemon from '../assets/images/logopokemon.png'

const Home = () => {
  return (
    <div className={style.container}>
      <img src={logoPokemon} alt="Pokemon Logo" className={style.logoPokemon}/>
      <div>
        <h2>
          ¡Encuentralos a todos! 
        </h2>
      </div>
    </div>
  )
}

export default Home