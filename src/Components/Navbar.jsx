import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.navbarBg};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: var(--transition);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  
  span {
    color: ${({ theme }) => theme.text};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  background-color: ${({ theme }) => theme.backgroundAlt};
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileNavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 0;

  &.active {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  transition: var(--transition);
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: rotate(10deg);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const mobileNavVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Gérer le défilement de la page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location]);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          Ahmed<span>Ghliss</span>
        </Logo>
        
        <NavLinks>
          <li><NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</NavLink></li>
          <li><NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>À propos</NavLink></li>
          <li><NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projets</NavLink></li>
          <li><NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink></li>
          <li><NavLink to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</NavLink></li>
          <li>
            <ThemeToggle onClick={toggleTheme} aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}>
              <FontAwesomeIcon icon={currentTheme === 'dark' ? faSun : faMoon} />
            </ThemeToggle>
          </li>
        </NavLinks>
        
        <MobileMenuButton 
          onClick={() => setMobileNavOpen(true)}
          aria-label="Open mobile menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </MobileMenuButton>
      </NavContainer>

      <AnimatePresence>
        {mobileNavOpen && (
          <>
            <Overlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileNavOpen(false)}
            />
            <MobileNavLinks
              variants={mobileNavVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <MobileNavHeader>
                <Logo to="/">
                  Ahmed<span>Ghliss</span>
                </Logo>
                <ThemeToggle onClick={toggleTheme}>
                  <FontAwesomeIcon icon={currentTheme === 'dark' ? faSun : faMoon} />
                </ThemeToggle>
                <MobileMenuButton onClick={() => setMobileNavOpen(false)}>
                  <FontAwesomeIcon icon={faTimes} />
                </MobileMenuButton>
              </MobileNavHeader>
              
              <MobileNavLink 
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
              >
                Accueil
              </MobileNavLink>
              
              <MobileNavLink 
                to="/about"
                className={location.pathname === '/about' ? 'active' : ''}
              >
                À propos
              </MobileNavLink>
              
              <MobileNavLink 
                to="/projects"
                className={location.pathname === '/projects' ? 'active' : ''}
              >
                Projets
              </MobileNavLink>
              
              <MobileNavLink 
                to="/contact"
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                Contact
              </MobileNavLink>
              
              <MobileNavLink 
                to="/blog"
                className={location.pathname === '/blog' ? 'active' : ''}
              >
                Blog
              </MobileNavLink>
            </MobileNavLinks>
          </>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
