import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SkillBar from '../Components/SkillBar';

const AboutSection = styled.section`
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div``;

const AboutTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 4px;
    background-color: ${({ theme }) => theme.primary};
  }
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const SkillsContainer = styled.div`
  margin-top: 3rem;
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
      <AboutContainer>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <AboutTitle variants={slideUp}>À propos de moi</AboutTitle>
          <AboutText variants={fadeIn}>
            Je suis un ingénieur logiciel full-stack passionné par le développement d'applications web robustes et performantes.
            Spécialisé en Angular, Spring Boot et DevOps, je m'efforce de créer des solutions innovantes qui apportent une réelle
            valeur ajoutée aux utilisateurs finaux. Fort d'une expérience solide dans le développement d'applications métier,
            je combine une expertise technique approfondie avec une excellente capacité à comprendre les besoins des clients.
            En tant que membre d'équipe collaboratif et orienté solutions, j'apprécie particulièrement les environnements Agile
            où je peux m'adapter rapidement aux changements et contribuer significativement au succès collectif.
          </AboutText>
        </motion.div>
        
        <AboutGrid>
          <ExperienceContainer>
            <ExperienceTitle 
              as={motion.h3}
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              Expérience Professionnelle
            </ExperienceTitle>
            
            <Timeline>
              <TimelineItem
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={slideUp}
              >
                <TimelineDate>Septembre 2024 – Mars 2025</TimelineDate>
                <TimelineCompany>L'Alchimiste Agency</TimelineCompany>
                <TimelineLocation>Tunis, Tunisie</TimelineLocation>
                <TimelineDescription>
                  <li>Développement front-end d'une application CRM avec Angular</li>
                  <li>Implémentation de fonctionnalités clés en collaboration avec une équipe pluridisciplinaire</li>
                  <li>Optimisation des processus de développement via CI/CD avec GitLab</li>
                  <li>Communication régulière avec les parties prenantes pour aligner le développement sur les objectifs d'affaires</li>
                </TimelineDescription>
                <TimelineTechnologies>
                  <span>Technologies:</span> Angular, Spring Boot, TypeScript, Jest, GitLab CI/CD, Docker, RESTful APIs
                </TimelineTechnologies>
              </TimelineItem>
              
              <TimelineItem
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={slideUp}
              >
                <TimelineDate>Février 2024 – Juillet 2024</TimelineDate>
                <TimelineCompany>Sofrecom Tunisia</TimelineCompany>
                <TimelineLocation>Tunis, Tunisie</TimelineLocation>
                <TimelineDescription>
                  <li>Développement d'une application de gestion de réseau de fibre optique avec Spring Boot et Angular</li>
                  <li>Conception et implémentation d'une application pilote pour automatiser des processus</li>
                  <li>Configuration de pipeline CI/CD avec Jenkins, Docker et GitLab</li>
                  <li>Participation active aux cérémonies Agile et collaboration étroite avec les clients</li>
                </TimelineDescription>
                <TimelineTechnologies>
                  <span>Technologies:</span> Java, Spring Boot, Angular, PostgreSQL, Jenkins, Docker, JUnit, Agile/Scrum
                </TimelineTechnologies>
              </TimelineItem>
              
              <TimelineItem
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={slideUp}
              >
                <TimelineDate>Juillet 2023 – Août 2023</TimelineDate>
                <TimelineCompany>Arabsoft</TimelineCompany>
                <TimelineLocation>Tunis, Tunisie</TimelineLocation>
                <TimelineDescription>
                  <li>Création de playbooks Ansible pour automatiser la configuration d'environnements</li>
                  <li>Optimisation des pipelines GitLab CI/CD pour rationaliser les processus de développement</li>
                  <li>Intégration d'analyses de vulnérabilité automatisées dans le pipeline CI</li>
                </TimelineDescription>
                <TimelineTechnologies>
                  <span>Technologies:</span> Ansible, GitLab CI/CD, Bash, Docker, Linux, YAML, Git
                </TimelineTechnologies>
              </TimelineItem>
            </Timeline>
            
            <EducationContainer>
              <EducationTitle
                as={motion.h3}
                initial="hidden"
                animate="visible"
                variants={slideUp}
              >
                Formation
              </EducationTitle>
              
              <Timeline>
                <TimelineItem
                  as={motion.div}
                  initial="hidden"
                  animate="visible"
                  variants={slideUp}
                >
                  <TimelineDate>2019 – 2024</TimelineDate>
                  <TimelineCompany>Higher Institute of Applied Science and Technology of Sousse</TimelineCompany>
                  <TimelineLocation>Sousse, Tunisie</TimelineLocation>
                  <TimelineDescription>
                    <li>Diplôme d'Ingénieur en Génie Logiciel (Cycle Préparatoire Intégré)</li>
                    <li>Cours pertinents: Systèmes Distribués, Cloud Computing, Algorithmes Avancés, Sécurité des Applications Web</li>
                  </TimelineDescription>
                </TimelineItem>
              </Timeline>
            </EducationContainer>
          </ExperienceContainer>
          
          <AboutContent>
            <SkillsContainer>
              <SkillsTitle
                as={motion.h3}
                initial="hidden"
                animate="visible"
                variants={slideUp}
              >
                Compétences Techniques
              </SkillsTitle>
              
              <SkillsGrid>
                {technicalSkills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </SkillsGrid>
              
              <SkillsTitle
                as={motion.h3}
                initial="hidden"
                animate="visible"
                variants={slideUp}
                style={{ marginTop: '2.5rem' }}
              >
                Soft Skills
              </SkillsTitle>
              
              <SkillsGrid>
                {softSkills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill.name}
                    level={skill.level}
                    index={index}
                  />
                ))}
              </SkillsGrid>
            </SkillsContainer>
            
            <SkillsContainer>
              <SkillsTitle
                as={motion.h3}
                initial="hidden"
                animate="visible"
                variants={slideUp}
              >
                Langues
              </SkillsTitle>
              
              <SkillsGrid>
                <SkillBar skill="Arabe" level={100} index={0} />
                <SkillBar skill="Français (B2)" level={85} index={1} />
                <SkillBar skill="Anglais (C1)" level={90} index={2} />
                <SkillBar skill="Allemand (A2)" level={40} index={3} />
              </SkillsGrid>
            </SkillsContainer>
          </AboutContent>
        </AboutGrid>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
