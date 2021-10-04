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
                    <div className="d-flex align-items-center">
                        <div>
                            <img className="header" src={logo} alt="" />
                        </div>
                        <div >
                            <h2 className="header-tag" href="#home"><small>The Lone Survivor</small>
                            </h2>
                            <p className="header-title">Learn New Exciting Survival Skills</p>
                        </div>

                    </div>

                    <Nav className="me-end">
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