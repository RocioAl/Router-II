import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Details = () => {
    const [pokemon, setPokemon] = useState();
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`).then((res) => {
            res.json().then((data) => {
                setPokemon(data);
            });
        });
    }, [name]);

    return (
        <div className=" mt-5">
            <div class="container w-75 border">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3">
                            {pokemon && (
                                <div >
                                    <img src={pokemon.sprites.other["official-artwork"].front_default} alt="Pokemon" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div class="col">
                        <h5 class="mt-5 ">{pokemon ? <p>  {pokemon.name}</p> : ""}</h5>
                        <ul >
                            <li className="d-flex justify-content-start"> •hp:{pokemon ? pokemon.stats[0].base_stat : ""}</li>
                            <li className="d-flex justify-content-start">• attak:{pokemon ? pokemon.stats[1].base_stat : ""}</li>
                            <li className="d-flex justify-content-start">• defense:{pokemon ? pokemon.stats[2].base_stat : ""}</li>
                            <li className="d-flex justify-content-start">• special-attack:{pokemon ? pokemon.stats[3].base_stat : ""}</li>
                            <li className="d-flex justify-content-start">• special-defense:{pokemon ? pokemon.stats[4].base_stat : ""}</li>
                            <li className="d-flex justify-content-start">• speed: {pokemon ? pokemon.stats[5].base_stat : ""}</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Details