import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillBarContainer = styled.div`
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

const SkillName = styled.span`
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.heading};
`;

const SkillLevel = styled.span`
  color: ${({ theme }) => theme.secondary};
  font-weight: 500;
  font-size: 0.9rem;
`;

const SkillBarOuter = styled.div`
  width: 100%;
  height: 12px;
  background-color: ${({ theme }) => `${theme.backgroundAlt}`};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const SkillBarInner = styled(motion.div)`
  height: 100%;
  background: ${({ theme, color }) => color || theme.primaryGradient};
  border-radius: 10px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      rgba(255, 255, 255, 0.1) 100%);
    background-size: 200% 100%;
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const SkillBar = ({ skill, level, index, color }) => {
  return (
    <SkillBarContainer>
      <SkillInfo>
        <SkillName>{skill}</SkillName>
        <SkillLevel>{level}%</SkillLevel>
      </SkillInfo>
      <SkillBarOuter>
        <SkillBarInner 
          color={color}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ 
            duration: 1.2, 
            delay: index * 0.1,
            ease: [0.165, 0.84, 0.44, 1]
          }}
        />
      </SkillBarOuter>
    </SkillBarContainer>
  );
};

export default SkillBar;
