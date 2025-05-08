import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from '../Components/SocialLinks';
import ahmedProfile from '../assets/images/AhmedGhliss.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding-top: 6rem;
    min-height: auto;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
  }
  
  .blob-1 {
    top: -15%;
    right: -5%;
    width: 500px;
    height: 500px;
    background: ${({ theme }) => theme.primary};
    opacity: 0.15;
  }
  
  .blob-2 {
    bottom: -10%;
    left: -10%;
    width: 600px;
    height: 600px;
    background: ${({ theme }) => theme.secondary};
    opacity: 0.1;
  }
  
  .dot-pattern {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(${({ theme }) => theme.border} 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.3;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 450px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
  box-sizing: border-box;
  margin-top: -40px;
  

  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    width: calc(100% + 24px);
    height: calc(100% + 24px);
    border: 2px solid ${({ theme }) => theme.primary};
    border-radius: 24px;
    z-index: -1;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: -15px;
    width: 80%;
    height: 80%;
    background: ${({ theme }) => theme.primaryGradient};
    border-radius: 20px;
    z-index: -2;
    opacity: 0.13;
    filter: blur(30px);
  }
`;

const HeroImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: all 0.3s ease;
  object-fit: cover;
  aspect-ratio: unset;
  display: block;
`;

const PreTitle = styled(motion.div)`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  background-color: ${({ theme }) => `${theme.secondary}15`};
  letter-spacing: 1px;
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
  
  .highlight {
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  
  @media (max-width: 1200px) {
    font-size: 4rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textLight};
  margin-bottom: 1.8rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.15rem;
  max-width: 650px;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 1rem 2.2rem;
  background: ${({ theme }) => theme.primaryGradient};
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  box-shadow: 0 10px 20px ${({ theme }) => `${theme.primary}40`};
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.secondaryHover};
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  &:hover {
    box-shadow: 0 15px 30px ${({ theme }) => `${theme.primary}50`};
    transform: translateY(-5px);
    
    &::before {
      transform: scaleX(1);
    }
    
    svg {
      transform: translateX(3px);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 1rem 2.2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  overflow: hidden;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.primary};
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  &:hover {
    color: ${({ theme }) => theme.buttonText};
    transform: translateY(-5px);
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
    
    svg {
      transform: translateY(-2px);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`;

const SocialContainer = styled(motion.div)`
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7,
      ease: [0.165, 0.84, 0.44, 1]
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.7,
      ease: [0.165, 0.84, 0.44, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

const Home = () => {
  return (
    <HeroSection id="home">
      <HeroBg>
        <div className="dot-pattern"></div>
        <div className="blob blob-1"></div>
        <div class="blob blob-2"></div>
      </HeroBg>
      
      <HeroContainer>
        <HeroContent>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <PreTitle variants={fadeInRight}>Bonjour, je suis</PreTitle>
            <Title variants={fadeInRight}>
              Ahmed <span className="highlight">Ghliss</span>
            </Title>
            <Subtitle variants={fadeInRight}>
              Créateur d'expériences web modernes et performantes
            </Subtitle>
            <Description variants={fadeInRight}>
              Full-Stack Software Engineer spécialisé dans le développement d'applications web robustes
              et scalables. Passionné par la création d'interfaces utilisateur intuitives et l'optimisation
              des performances côté serveur. J'excelle dans les environnements Agile grâce à ma communication
              claire et mon approche orientée solutions.
            </Description>
            
            <ButtonContainer variants={fadeInUp}>
              <PrimaryButton 
                as={Link} 
                to="/projects" 
                whileTap={{ scale: 0.97 }}
              >
                Explorer mes projets <FontAwesomeIcon icon={faArrowRight} />
              </PrimaryButton>
              
              <SecondaryButton 
                as="a" 
                href="/cv" 
                download 
                whileTap={{ scale: 0.97 }}
              >
                Télécharger CV <FontAwesomeIcon icon={faDownload} />
              </SecondaryButton>
            </ButtonContainer>
            
            <SocialContainer variants={fadeInUp}>
              <SocialLinks />
            </SocialContainer>
          </motion.div>
        </HeroContent>          
        <HeroImageContainer
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.015 }}
        >
          <HeroImage src={ahmedProfile} alt="Ahmed Ghliss" />
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Home;
