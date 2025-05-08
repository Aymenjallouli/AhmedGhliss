import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../Components/ProjectCard';

const ProjectsSection = styled.section`
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const SectionSubtitle = styled(motion.p)`
  color: ${({ theme }) => theme.textLight};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem auto;
  font-size: 1.1rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  gap: 0.5rem;
`;

const FilterButton = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  background: ${({ active, theme }) => active ? theme.primary : 'transparent'};
  color: ${({ active, theme }) => active ? '#fff' : theme.text};
  border: 2px solid ${({ active, theme }) => active ? theme.primary : theme.border};
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ active, theme }) => active ? '#fff' : theme.primary};
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
      <ProjectsContainer>
        <SectionTitle
          as={motion.h2}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Mes projets
        </SectionTitle>
        
        <SectionSubtitle
          as={motion.p}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Découvrez une sélection de mes projets les plus récents et significatifs qui démontrent
          mes compétences techniques et ma passion pour la création d'applications web performantes.
        </SectionSubtitle>
        
        <FilterContainer>
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.name}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <AnimatePresence mode="wait">
          <ProjectsGrid
            as={motion.div}
            key={activeFilter}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <EmptyState
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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
