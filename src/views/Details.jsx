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
        <div className="text-center mt-5">
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
                        <h5 class="mt-5">{pokemon ? <p>  {pokemon.name}</p> : ""}</h5>
                        <ul class="container w-25 ">
                            <li>{pokemon ? pokemon.types[0].type.name : ""}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Details