import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  padding: 1rem 0;
  
  &.scrolled {
    background-color: ${({ theme }) => theme.navbarBg};
    backdrop-filter: blur(15px);
    padding: 0.7rem 0;
    box-shadow: ${({ theme }) => theme.navbarShadow};
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  max-width: 1300px;
  margin: 0 auto;
  height: 60px;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled(Link)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.heading};
  position: relative;
  z-index: 10;
  
  .dot {
    display: inline-block;
    color: ${({ theme }) => theme.secondary};
    font-size: 2.5rem;
    line-height: 0;
    transform: translateY(4px);
    margin-left: 2px;
  }
  
  .gradient-text {
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
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
  width: 80%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.backgroundAlt};
  padding: 2.2rem 2rem;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-left: 1px solid ${({ theme }) => theme.border};
  backdrop-filter: blur(10px);
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const NavLink = styled(Link)`
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
  font-size: 1.05rem;
  padding: 0.5rem 0;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.primaryGradient};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 1px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  &.active {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const MobileNavLink = styled(Link)`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  padding: 0.8rem 0;
  display: block;
  position: relative;
  width: fit-content;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0.6rem;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primaryGradient};
    transition: width 0.3s ease;
    border-radius: 1px;
  }
  
  &:hover {
    transform: translateX(5px);
    color: ${({ theme }) => theme.primary};
    
    &::after {
      width: 100%;
    }
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    
    &::after {
      width: 30%;
    }
  }
`;

const ThemeToggleWrapper = styled.div`
  margin-left: 1rem;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.heading};
  cursor: pointer;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => `${theme.primary}15`};
    color: ${({ theme }) => theme.primary};
    transform: rotate(5deg);
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => `rgba(22, 22, 26, 0.7)`};
  backdrop-filter: blur(4px);
  z-index: 99;
`;

const mobileNavVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const navItemVariants = {
  closed: { 
    x: 20, 
    opacity: 0 
  },
  open: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
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
    <Nav className={scrolled ? 'scrolled' : ''}>
      <NavContainer>
        <Logo to="/">
          <span className="gradient-text">Ahmed</span>
          <span className="dot">.</span>
        </Logo>
        
        <NavLinks>
          <li><NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</NavLink></li>
          <li><NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>À propos</NavLink></li>
          <li><NavLink to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projets</NavLink></li>
          <li><NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink></li>
          <li><NavLink to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</NavLink></li>
          <li>
            <ThemeToggleWrapper>
              <ThemeToggle toggleTheme={toggleTheme} currentTheme={currentTheme} />
            </ThemeToggleWrapper>
          </li>
        </NavLinks>
        
        <MobileMenuButton 
          onClick={() => setMobileNavOpen(true)}
          aria-label="Ouvrir le menu"
          whileTap={{ scale: 0.9 }}
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
              transition={{ duration: 0.3 }}
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
                  <span className="gradient-text">Ahmed</span>
                  <span className="dot">.</span>
                </Logo>
                <ThemeToggleWrapper>
                  <ThemeToggle toggleTheme={toggleTheme} currentTheme={currentTheme} />
                </ThemeToggleWrapper>
                <MobileMenuButton 
                  onClick={() => setMobileNavOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </MobileMenuButton>
              </MobileNavHeader>
              
              <motion.div variants={navItemVariants}>
                <MobileNavLink 
                  to="/"
                  className={location.pathname === '/' ? 'active' : ''}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Accueil
                </MobileNavLink>
              </motion.div>
              
              <motion.div variants={navItemVariants}>
                <MobileNavLink 
                  to="/about"
                  className={location.pathname === '/about' ? 'active' : ''}
                  onClick={() => setMobileNavOpen(false)}
                >
                  À propos
                </MobileNavLink>
              </motion.div>
              
              <motion.div variants={navItemVariants}>
                <MobileNavLink 
                  to="/projects"
                  className={location.pathname === '/projects' ? 'active' : ''}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Projets
                </MobileNavLink>
              </motion.div>
              
              <motion.div variants={navItemVariants}>
                <MobileNavLink 
                  to="/contact"
                  className={location.pathname === '/contact' ? 'active' : ''}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact
                </MobileNavLink>
              </motion.div>
              
              <motion.div variants={navItemVariants}>
                <MobileNavLink 
                  to="/blog"
                  className={location.pathname === '/blog' ? 'active' : ''}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Blog
                </MobileNavLink>
              </motion.div>
            </MobileNavLinks>
          </>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
