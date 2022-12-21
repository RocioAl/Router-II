import React from 'react'
import ImgPokemon from '../assets/img/pokemon.png';

const Home = () => {
    return (
        <div className="text-center mt-5">
            <h1 >Bienvenido Maestro Pokemon</h1>
            <img src={ImgPokemon} alt="pokemon" />
        </div>
    )
}

export default Home