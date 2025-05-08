import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlogCard from '../Components/BlogCard';

const BlogSection = styled.section`
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const BlogContainer = styled.div`
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

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const Blog = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Les meilleures pratiques pour le développement Angular en 2025",
      slug: "best-angular-practices-2025",
      excerpt: "Découvrez les techniques et astuces les plus efficaces pour optimiser votre développement Angular en 2025.",
      image: "/src/assets/images/blog/angular.jpg",
      date: "15 Avril 2025",
      category: "Angular"
    },
    {
      id: 2,
      title: "Microservices avec Spring Boot : Architecture et implémentation",
      slug: "microservices-spring-boot-architecture",
      excerpt: "Guide détaillé sur la conception et la mise en œuvre d'une architecture microservices robuste avec Spring Boot.",
      image: "/src/assets/images/blog/spring-boot.jpg",
      date: "28 Mars 2025",
      category: "Spring Boot"
    },
    {
      id: 3,
      title: "Optimisation CI/CD : Accélérer votre pipeline de déploiement",
      slug: "optimizing-cicd-pipelines",
      excerpt: "Stratégies efficaces pour améliorer la performance et la fiabilité de vos pipelines CI/CD.",
      image: "/src/assets/images/blog/cicd.jpg",
      date: "12 Février 2025",
      category: "DevOps"
    },
    {
      id: 4,
      title: "React vs Angular : Quel framework choisir en 2025 ?",
      slug: "react-vs-angular-2025",
      excerpt: "Analyse comparative des forces et faiblesses de React et Angular pour vous aider à faire le bon choix.",
      image: "/src/assets/images/blog/react-vs-angular.jpg",
      date: "5 Janvier 2025",
      category: "Front-end"
    },
    {
      id: 5,
      title: "L'importance de la sécurité dans le développement web moderne",
      slug: "web-security-importance",
      excerpt: "Comment intégrer les bonnes pratiques de sécurité dans votre processus de développement web.",
      image: "/src/assets/images/blog/security.jpg",
      date: "18 Décembre 2024",
      category: "Sécurité"
    },
    {
      id: 6,
      title: "API REST vs GraphQL : Quelle approche pour votre prochain projet ?",
      slug: "rest-vs-graphql",
      excerpt: "Comparaison détaillée des architectures API REST et GraphQL avec des cas d'utilisation concrets.",
      image: "/src/assets/images/blog/api.jpg",
      date: "3 Novembre 2024",
      category: "Backend"
    }
  ]);
  
  return (
    <BlogSection id="blog">
      <BlogContainer>
        <SectionTitle
          as={motion.h2}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Blog
        </SectionTitle>
        
        <SectionSubtitle
          as={motion.p}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Articles techniques, tutoriels et réflexions sur le développement web,
          les technologies émergentes et les bonnes pratiques.
        </SectionSubtitle>
        
        <BlogGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </BlogGrid>
      </BlogContainer>
    </BlogSection>
  );
};

export default Blog;
