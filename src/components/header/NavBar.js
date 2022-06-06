import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="danger" expand="lg" className='navbar-dark'>
                <Container fluid>
                    <a className="navbar-brand" href="/">React Restaurant</a>
                    {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className="nav-link" to="/home" end>Home</NavLink>
                            <NavLink className='nav-link' to="/menu">Menu</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavDropdown title="Contact" id="navbarScrollingDropdown">
                                <Dropdown.Item as={Link} to="/contact">Contact</Dropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;