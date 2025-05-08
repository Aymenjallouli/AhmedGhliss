import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleContainer = styled(motion.button)`
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  width: 62px;
  height: 32px;
  position: relative;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary};
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 4px;
  
  svg {
    font-size: 0.875rem;
    transition: color 0.3s ease;
  }
`;

const SunIcon = styled.div`
  color: ${({ isDark }) => (isDark ? '#aaa' : '#f39c12')};
`;

const MoonIcon = styled.div`
  color: ${({ isDark }) => (isDark ? '#f1c40f' : '#aaa')};
`;

const Thumb = styled(motion.div)`
  position: absolute;
  top: 2px;
  left: 3px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
        animate={{ x: isDark ? 28 : 0 }} 
        transition={spring}
      />
    </ToggleContainer>
  );
};

export default ThemeToggle;
