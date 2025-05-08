import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../Components/ProjectCard';

const ProjectsSection = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 6rem 0;
  }
`;

const ProjectsBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
  }
  
  .blob-1 {
    bottom: 5%;
    right: -5%;
    width: 500px;
    height: 500px;
    background: ${({ theme }) => theme.primary};
    opacity: 0.08;
  }
  
  .blob-2 {
    top: 20%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: ${({ theme }) => theme.secondary};
    opacity: 0.08;
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.03em;
  
  span {
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SectionSubtitle = styled(motion.p)`
  color: ${({ theme }) => theme.textLight};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem auto;
  font-size: 1.15rem;
  line-height: 1.8;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  gap: 1rem;
`;

const FilterButton = styled(motion.button)`
  padding: 0.8rem 1.8rem;
  background: ${({ active, theme }) => active ? theme.primaryGradient : 'transparent'};
  color: ${({ active, theme }) => active ? '#fff' : theme.text};
  border: 2px solid ${({ active, theme }) => active ? 'transparent' : theme.border};
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: ${({ active, theme }) => active ? '0 10px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    color: ${({ active, theme }) => active ? '#fff' : theme.primary};
    border-color: ${({ active, theme }) => active ? 'transparent' : theme.primary};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 3rem;
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    color: ${({ theme }) => theme.textLight};
  }
`;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Application CRM - L'Alchimiste Agency",
      description: "Application de gestion de la relation client avec une interface utilisateur moderne et intuitive.",
      image: "/src/assets/images/projects/crm.jpg",
      category: ["front-end", "back-end", "devops"],
      technologies: ["Angular", "TypeScript", "Spring Boot", "GitLab CI/CD"],
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      id: 2,
      title: "Système de Gestion de Réseau Fibre Optique",
      description: "Application de gestion des réseaux de fibre optique pour suivre, gérer et optimiser les infrastructures réseau.",
      image: "/src/assets/images/projects/fiber.jpg",
      category: ["front-end", "back-end", "full-stack"],
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Jenkins", "Docker"],
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      id: 3,
      title: "Automatisation d'Environnement DevOps",
      description: "Scripts et configurations pour l'automatisation de l'installation et la configuration d'environnements de développement.",
      image: "/src/assets/images/projects/devops.jpg",
      category: ["devops", "infrastructure"],
      technologies: ["Ansible", "GitLab CI/CD", "Docker", "Bash", "Linux"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Personnel",
      description: "Site web portfolio personnel construit avec React et styled-components.",
      image: "/src/assets/images/projects/portfolio.jpg",
      category: ["front-end", "ui-design"],
      technologies: ["React", "Styled Components", "Framer Motion"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      id: 5,
      title: "API RESTful pour Application de Gestion d'Événements",
      description: "Backend pour une application de gestion d'événements avec authentification JWT et autorisation basée sur les rôles.",
      image: "/src/assets/images/projects/event-api.jpg",
      category: ["back-end", "api"],
      technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "JUnit"],
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      id: 6,
      title: "Tableau de Bord d'Analyse de Données",
      description: "Interface d'analyse de données avec visualisations interactives et filtrage en temps réel.",
      image: "/src/assets/images/projects/dashboard.jpg",
      category: ["front-end", "data-visualization"],
      technologies: ["Angular", "NgRx", "D3.js", "Chart.js"],
      githubUrl: "",
      liveUrl: "",
      featured: false
    }
  ]);
  
  const [filters] = useState([
    { id: 'all', name: 'Tous' },
    { id: 'front-end', name: 'Front-end' },
    { id: 'back-end', name: 'Back-end' },
    { id: 'full-stack', name: 'Full Stack' },
    { id: 'devops', name: 'DevOps' },
    { id: 'api', name: 'API' },
    { id: 'ui-design', name: 'UI Design' },
    { id: 'data-visualization', name: 'Data Viz' }
  ]);
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.category.includes(activeFilter));
      setFilteredProjects(filtered);
    }
  }, [activeFilter, projects]);
  
  return (
    <ProjectsSection id="projects">
      <ProjectsBg>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </ProjectsBg>
      
      <ProjectsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Mes <span>Projets</span>
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Découvrez une sélection de mes projets les plus récents et significatifs qui démontrent
          mes compétences techniques et ma passion pour la création d'applications web performantes.
        </SectionSubtitle>
        
        <FilterContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((filter, index) => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {filter.name}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <AnimatePresence mode="wait">
          <ProjectsGrid
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <EmptyState
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Aucun projet trouvé</h3>
                <p>Aucun projet ne correspond au filtre sélectionné.</p>
              </EmptyState>
            )}
          </ProjectsGrid>
        </AnimatePresence>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
