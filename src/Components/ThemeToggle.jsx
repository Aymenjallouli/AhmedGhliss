import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleContainer = styled(motion.button)`
  background: ${({ theme }) => theme.backgroundAlt};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.2rem;
  width: 64px;
  height: 32px;
  position: relative;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05);
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0.3rem;
  position: relative;
  z-index: 2;
  
  svg {
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }
`;

const SunIcon = styled.div`
  color: ${({ isDark }) => (isDark ? '#94a1b2' : '#ffd166')};
  filter: ${({ isDark }) => (isDark ? 'none' : 'drop-shadow(0 0 2px rgba(255, 209, 102, 0.5))')};
`;

const MoonIcon = styled.div`
  color: ${({ isDark }) => (isDark ? '#a78bfa' : '#94a1b2')};
  filter: ${({ isDark }) => (isDark ? 'drop-shadow(0 0 2px rgba(167, 139, 250, 0.5))' : 'none')};
`;

const Thumb = styled(motion.div)`
  position: absolute;
  top: 2px;
  left: 2px;
  height: 24px;
  width: 24px;
  background: ${({ theme, isDark }) => 
    isDark 
    ? 'linear-gradient(135deg, #a78bfa, #7c3aed)' 
    : 'linear-gradient(135deg, #ffd166, #f59e0b)'};
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    top: 20%;
    left: 15%;
    filter: blur(1px);
    opacity: 0.6;
  }
`;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const ThemeToggle = ({ toggleTheme, currentTheme }) => {
  const isDark = currentTheme === 'dark';

  return (
    <ToggleContainer 
      onClick={toggleTheme}
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      title={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
      whileTap={{ scale: 0.95 }}
    >
      <Icons>
        <SunIcon isDark={isDark}>
          <FontAwesomeIcon icon={faSun} />
        </SunIcon>
        <MoonIcon isDark={isDark}>
          <FontAwesomeIcon icon={faMoon} />
        </MoonIcon>
      </Icons>
      <Thumb 
        isDark={isDark}
        animate={{ x: isDark ? 32 : 0 }} 
        transition={spring}
      />
    </ToggleContainer>
  );
};

export default ThemeToggle;
