import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled(motion.article)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${CardContainer}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.heading};
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.textLight};
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const DetailLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  font-size: 0.9rem;
  transition: var(--transition);
  
  &:hover {
    gap: 0.7rem;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ProjectCard = ({ project, onClick }) => {
  return (
    <CardContainer
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      <CardImage>
        <img src={project.image} alt={project.title} />
      </CardImage>
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        
        <TechTags>
          {project.technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechTags>
        
        <CardFooter>
          <CardLinks>
            {project.github && (
              <IconLink 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Code source sur GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </IconLink>
            )}
            {project.live && (
              <IconLink 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Demo en ligne"
              >
                <FontAwesomeIcon icon={faChrome} />
              </IconLink>
            )}
          </CardLinks>
          
          <DetailLink onClick={() => onClick(project)}>
            Voir détails <FontAwesomeIcon icon={faArrowRight} />
          </DetailLink>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;
