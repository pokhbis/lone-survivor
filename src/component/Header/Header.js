import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/survival-logo-1-removebg-preview.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <div>
                        <img className="header" src={logo} alt="" />
                    </div>
                    <div>
                        <Navbar.Brand className="header-tag" href="#home"><small>Enjoy Adventure Training</small>
                        </Navbar.Brand>
                        <p className="header-title">Learn New Exciting Skills</p>
                    </div>

                    <Nav className="me-end">
                        {/* <Nav.Link className="header-options f" href="/home">Home</Nav.Link>
                        <Nav.Link className="header-options" href="/about">About</Nav.Link>
                        <Nav.Link className="header-options" href="/service">Services</Nav.Link>
                        <Nav.Link className="header-options" href="/blog">Blog</Nav.Link> */}
                        <Link className="header-options" to="/home">Home</Link>
                        <Link className="header-options" to="/about">About</Link>
                        <Link className="header-options" to="/service">Services</Link>
                        <Link className="header-options" to="/blog">Blog</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};
export default Header;