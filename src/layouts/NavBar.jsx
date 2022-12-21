import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavbarHeader from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {

    return (
        <>
            <NavbarHeader expand="lg" bg="secondary" variant="dark">
                <Container  >
                    <NavbarHeader.Toggle aria-controls="navbarScroll" />
                    <NavbarHeader.Collapse id="navbarScroll">
                        <Nav className="me-auto" >
                            <h2>📍</h2>
                        </Nav>
                        <Nav className="me-3">
                            <NavLink
                                className=" text-decoration-none"
                                style={({ isActive }) => ({
                                    color: isActive ? "red" : 'white',
                                    opacity: isActive ? 1 : ""
                                })}
                                end to='/'>
                                <h4> Home</h4>
                            </NavLink>
                        </Nav>
                        <Nav >
                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? "red " : 'white',
                                    opacity: isActive ? 1 : ""
                                })}
                                className=" text-decoration-none"
                                to='/pokemones'>
                                <h4>Pokemones</h4>
                            </NavLink>
                        </Nav>
                    </NavbarHeader.Collapse>
                </Container>
            </NavbarHeader>
        </>
    )
}

export default Navbar 