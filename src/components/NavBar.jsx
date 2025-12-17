import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home'); // Initial state is 'home'
    const [scrolled, setScrolled] = useState(false);  // Initial state is not scrolled

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) { //more than 50 pixels
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" > {/* Hamburger menu for mobile view */}
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}