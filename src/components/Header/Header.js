import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand><img className="w-50" src={logo} alt="" srcset="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Stack direction="horizontal" gap={3}>
                                <NavLink
                                    className="text-decoration-none text-success"
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "green"
                                    }}
                                >
                                    HOME
                                </NavLink>
                                <NavLink
                                    className="text-decoration-none text-success"
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "green"
                                    }}
                                >
                                    ABOUT AIICT
                                </NavLink>
                                <NavLink
                                    className="text-decoration-none text-success"
                                    to="/services"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "green"
                                    }}
                                >
                                    SERVICES
                                </NavLink>
                                <NavLink
                                    className="text-decoration-none text-success"
                                    to="/contact"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "green"
                                    }}
                                >
                                    CONTACT
                                </NavLink>
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;