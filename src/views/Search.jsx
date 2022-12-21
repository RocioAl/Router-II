import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search = () => {
    const [pokemones, setPokemones] = useState([]);
    const [name, setName] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        const getPokemones = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000');
            const data = await resp.json();
            if (data && data.results) {
                const names = data.results.map(({ name }) => ({ name }))
                setPokemones(names.sort((a, b) =>
                    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                ))
            }
        }
        getPokemones();
    }, [])

    const handleChange = (event) => {
        const id = event.target.value;
        if (id && id !== "") {
            setName(id)
        }
    }

    const navigatePokemones = () => {
        navigate(`/pokemones/${name}`);
    }

    return (
        <>
            < h1 className="mt-5 text-center  "> Selecciona un Pokemon</h1 >
            <Form className=" text-center col-11 col-md-2 m-auto "  >
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Select onChange={handleChange} aria-label="Default select example">
                        <option>Pokemones</option>
                        {pokemones.map((item) => (
                            <option key={item.name} value={item.name}>{item.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Button
                    onClick={navigatePokemones}
                    className="mb-5"
                    variant="dark"
                    type="submit"
                    size="lg" >
                    Ver Detalles
                </Button>
            </Form>
        </>

    )
}

export default Search