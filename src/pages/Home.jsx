import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from '../Components/SocialLinks';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding-top: 6rem;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 992px) {
    justify-content: center;
    margin-bottom: 2rem;
  }
`;

const HeroImage = styled(motion.img)`
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 4px solid ${({ theme }) => theme.primary};
  box-shadow: ${({ theme }) => theme.shadow};
  
  @media (max-width: 576px) {
    max-width: 300px;
  }
`;

const PreTitle = styled(motion.span)`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textLight};
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.7;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialContainer = styled(motion.div)`
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent as={motion.div} variants={staggerContainer} initial="hidden" animate="visible">
          <PreTitle variants={fadeInUp}>Hello, je suis</PreTitle>
          <Title variants={fadeInUp}>Ahmed Ghliss</Title>
          <Subtitle variants={fadeInUp}>Full-Stack Software Engineer</Subtitle>
          <Description variants={fadeInUp}>
            Je développe des applications web robustes et performantes avec Angular, Spring Boot
            et les technologies DevOps. Résolveur de problèmes passionné, je m'épanouis dans les
            équipes Agile et je communique clairement.
          </Description>
          
          <ButtonContainer variants={fadeInUp}>
            <PrimaryButton as={Link} to="/projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Voir mes projets <FontAwesomeIcon icon={faArrowRight} />
            </PrimaryButton>
            <SecondaryButton as="a" href="/cv" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Télécharger CV <FontAwesomeIcon icon={faDownload} />
            </SecondaryButton>
          </ButtonContainer>
          
          <SocialContainer variants={fadeInUp}>
            <SocialLinks />
          </SocialContainer>
        </HeroContent>
        
        <HeroImageContainer>
          <HeroImage 
            src="/src/assets/images/profile.jpg" 
            alt="Ahmed Ghliss"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          />
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Home;
