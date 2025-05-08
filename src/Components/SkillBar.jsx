import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillBarContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SkillLevel = styled.span`
  color: ${({ theme }) => theme.textLight};
`;

const SkillBarOuter = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-radius: 5px;
  overflow: hidden;
`;

const SkillBarInner = styled(motion.div)`
  height: 100%;
  background-color: ${({ theme, color }) => color || theme.primary};
  border-radius: 5px;
`;

const SkillBar = ({ name, level, percentage, color }) => {
  return (
    <SkillBarContainer>
      <SkillInfo>
        <SkillName>{name}</SkillName>
        <SkillLevel>{level}</SkillLevel>
      </SkillInfo>
      <SkillBarOuter>
        <SkillBarInner 
          color={color}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </SkillBarOuter>
    </SkillBarContainer>
  );
};

export default SkillBar;
