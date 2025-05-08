import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SkillBar from '../Components/SkillBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faLightbulb, faCode, faUsers } from '@fortawesome/free-solid-svg-icons';
import ahmedProfile from '../assets/images/AhmedGhliss.jpg';

const AboutSection = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 6rem 0;
  }
`;

const AboutBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
  }
  
  .blob-1 {
    top: 15%;
    right: 10%;
    width: 300px;
    height: 300px;
    background: ${({ theme }) => theme.primary};
    opacity: 0.1;
  }
  
  .blob-2 {
    bottom: 10%;
    left: 5%;
    width: 400px;
    height: 400px;
    background: ${({ theme }) => theme.secondary};
    opacity: 0.08;
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

const AboutContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 5rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const AboutContent = styled.div`
  position: relative;
`;

const AboutTitle = styled(motion.h2)`
  font-size: 3.5rem;
  margin-bottom: 2.5rem;
  position: relative;
  font-weight: 800;
  letter-spacing: -0.03em;
  
  &::before {
    content: 'À propos';
    position: absolute;
    top: -2.5rem;
    left: 0;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.secondary};
    text-transform: uppercase;
    letter-spacing: 3px;
    opacity: 0.8;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 0;
    width: 60px;
    height: 6px;
    background: ${({ theme }) => theme.primaryGradient};
    border-radius: 3px;
  }
  
  span {
    color: ${({ theme }) => theme.primary};
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.15rem;
  margin-bottom: 2.2rem;
  line-height: 1.9;
  color: ${({ theme }) => theme.text};
  max-width: 600px;
  
  strong {
    color: ${({ theme }) => theme.heading};
    font-weight: 600;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 450px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
  box-sizing: border-box;
  margin-top: -70px;
  align-self: flex-start;

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

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.cardShadow};
    transition: all 0.3s ease;
    object-fit: cover;
    aspect-ratio: unset;
    display: block;
  }

  
    
  }
`;

const FeatureBoxesContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureBox = styled(motion.div)`
  padding: 1.8rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    width: 50px;
    height: 50px;
    background: ${({ theme }) => `${theme.primary}15`};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.primary};
    font-size: 1.3rem;
  }
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.textLight};
  }
`;

const SkillsContainer = styled.div`
  margin-top: 5rem;
  
  h3 {
    font-size: 2rem;
    margin-bottom: 2.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.6rem;
      left: 0;
      width: 40px;
      height: 4px;
      background: ${({ theme }) => theme.primaryGradient};
      border-radius: 2px;
    }
  }
`;

const SkillsTitle = styled(motion.h3)`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceContainer = styled.div`
`;

const ExperienceTitle = styled(motion.h3)`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 6px;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.border};
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 30px;
  padding-bottom: 2.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
  }
  
  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineDate = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textLight};
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const TimelineLocation = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textLight};
  margin-bottom: 0.8rem;
`;

const TimelineDescription = styled.ul`
  padding-left: 1.2rem;
  
  li {
    position: relative;
    margin-bottom: 0.5rem;
    line-height: 1.6;
    
    &::before {
      content: '•';
      position: absolute;
      left: -1.2rem;
      color: ${({ theme }) => theme.primary};
      font-weight: bold;
    }
  }
`;

const TimelineTechnologies = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  
  span {
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
`;

const EducationContainer = styled.div`
  margin-top: 3rem;
`;

const EducationTitle = styled(motion.h3)`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

const About = () => {
  // Compétences techniques
  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'React', level: 75 },
    { name: 'Java', level: 80 },
    { name: 'Spring Boot', level: 85 },
    { name: 'DevOps (Docker, CI/CD)', level: 80 },
    { name: 'SQL/NoSQL Databases', level: 75 },
    { name: 'HTML/CSS', level: 90 }
  ];
  
  // Soft skills
  const softSkills = [
    { name: 'Team Collaboration', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Problem-solving', level: 95 },
    { name: 'Time Management', level: 80 },
    { name: 'Adaptability', level: 90 },
    { name: 'Attention to Detail', level: 85 }
  ];

  return (
    <AboutSection id="about">
      <AboutBg>
        <div className="dot-pattern"></div>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </AboutBg>
      
      <AboutContainer>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <AboutTitle variants={slideUp}>Qui suis-<span>je</span> ?</AboutTitle>
          <AboutGrid>
            <AboutContent>
              <AboutText variants={fadeIn}>
                Je suis <strong>Ahmed</strong>, ingénieur logiciel passionné spécialisé dans le développement full-stack, avec un focus sur les technologies modernes comme <strong>Angular</strong> et <strong>Spring Boot</strong>.
              </AboutText>
              <AboutText variants={fadeIn}>
                Je m'efforce de créer des applications web <strong>robustes et évolutives</strong> qui apportent une réelle valeur aux utilisateurs. Grâce à mon expérience dans le développement d'applications métier, je combine expertise technique et compréhension des besoins clients.
              </AboutText>
              <AboutText variants={fadeIn}>
                En tant que membre d'équipe <strong>collaboratif et orienté solutions</strong>, je m'épanouis dans les environnements Agile où je peux m'adapter rapidement et contribuer significativement au succès collectif.
              </AboutText>
              
              <FeatureBoxesContainer>
                <FeatureBox 
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                  <h3>Développement Full-Stack</h3>
                  <p>Expertise en développement front-end avec Angular et back-end avec Spring Boot pour des applications complètes et performantes.</p>
                </FeatureBox>
                
                <FeatureBox 
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <h3>Travail en équipe</h3>
                  <p>Communication efficace et collaboration avec les designers, product managers et autres développeurs pour délivrer des projets de qualité.</p>
                </FeatureBox>
                
                <FeatureBox 
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faLightbulb} />
                  </div>
                  <h3>Résolution de problèmes</h3>
                  <p>Analyse approfondie des besoins et identification des solutions optimales pour répondre aux défis techniques complexes.</p>
                </FeatureBox>
                
                <FeatureBox 
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserGraduate} />
                  </div>
                  <h3>Apprentissage continu</h3>
                  <p>Veille technologique constante et acquisition de nouvelles compétences pour rester à jour avec les évolutions du secteur.</p>                </FeatureBox>
              </FeatureBoxesContainer>
            </AboutContent>
            <AboutImage
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.015 }}
            >
              <img src={ahmedProfile} alt="Ahmed Ghliss" />
            </AboutImage>
          </AboutGrid>
        </motion.div>
        
        <SkillsContainer>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <SkillsTitle>
              Compétences Techniques
            </SkillsTitle>
            
            <SkillsGrid>
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <SkillBar
                    skill={skill.name}
                    level={skill.level}
                    index={index}
                  />
                </motion.div>
              ))}
            </SkillsGrid>
            
            <SkillsTitle style={{ marginTop: '3.5rem' }}>
              Soft Skills
            </SkillsTitle>
            
            <SkillsGrid>
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <SkillBar
                    skill={skill.name}
                    level={skill.level}
                    index={index}
                  />
                </motion.div>
              ))}
            </SkillsGrid>
          </motion.div>
        </SkillsContainer>
        
        <SkillsContainer>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <SkillsTitle>
              Langues
            </SkillsTitle>
            
            <SkillsGrid>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <SkillBar skill="Arabe" level={100} index={0} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SkillBar skill="Français (B2)" level={85} index={1} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <SkillBar skill="Anglais (C1)" level={90} index={2} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <SkillBar skill="Allemand (A2)" level={40} index={3} />
              </motion.div>
            </SkillsGrid>
          </motion.div>
        </SkillsContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
