import React, {Fragment} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import {Link, animateScroll as scroll} from 'react-scroll';

import "./navbar.css";

const NavbarC = () => {
    return (
        <Fragment>
            <Container>
                <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" className="animate-navbar nav-theme justify-content-between">
                    <Navbar.Brand className="name" onClick={() => scroll.scrollToTop()}>La Guagua TV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link" to="home" smooth duration={500}>Home</Link>
                            <Link className="nav-link" to="videos" smooth duration={1000}>Videos</Link>                    
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Fragment>
    );
}

export default NavbarC;
