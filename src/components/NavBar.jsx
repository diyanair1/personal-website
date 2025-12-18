import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // mobile menu is 

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Update active link based on scroll position
            const sections = ['home', 'about', 'projects'];
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        }
        
        window.addEventListener("scroll", onScroll);
        onScroll(); // Call once on mount to set initial active link
        
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (e, link) => {
        e.preventDefault(); // Prevent default anchor behavior
        
        setActiveLink(link);
        setIsMobileMenuOpen(false);
        
        // Smooth scroll to section
        const element = document.getElementById(link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className={`modern-navbar glass-navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Logo/Brand */}
                    <a 
                        href="#home" 
                        className="navbar-brand"
                        onClick={(e) => handleNavClick(e, 'home')}
                        aria-label="Home - Diya Nair"
                    >
                        <img src={logo} alt="Diya Nair Logo" className="navbar-logo" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="navbar-links">
                        <a 
                            href="#home" 
                            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'home')}
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'about')}
                        >
                            About
                        </a>
                        <a 
                            href="#projects" 
                            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, 'projects')}
                        >
                            Projects
                        </a>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button 
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-links">
                    <a 
                        href="#home" 
                        className={`mobile-nav-link ${activeLink === 'home' ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, 'home')}
                        style={{ animationDelay: '0.1s' }}
                    >
                        Home
                    </a>
                    <a 
                        href="#about" 
                        className={`mobile-nav-link ${activeLink === 'about' ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, 'about')}
                        style={{ animationDelay: '0.2s' }}
                    >
                        About
                    </a>
                    <a 
                        href="#projects" 
                        className={`mobile-nav-link ${activeLink === 'projects' ? 'active' : ''}`}
                        onClick={(e) => handleNavClick(e, 'projects')}
                        style={{ animationDelay: '0.3s' }}
                    >
                        Projects
                    </a>
                </div>
            </div>
        </>
    )
}