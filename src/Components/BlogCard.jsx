import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTag, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled(motion.article)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.cardShadow};
  transition: all 0.4s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => `${theme.border}50`};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 30px ${({ theme }) => `${theme.shadowColor}15`};
    
    &::before {
      opacity: 1;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.primaryGradient};
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.7s ease;
  }
  
  ${CardContainer}:hover & img {
    transform: scale(1.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, 
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0.1) 70%,
      rgba(0,0,0,0.3) 100%);
  }
`;

const CardCategory = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => `${theme.primary}99`};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  backdrop-filter: blur(5px);
  z-index: 2;
`;

const CardBody = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.2rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textLight};
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  font-family: 'Space Grotesk', sans-serif;
  
  a {
    color: ${({ theme }) => theme.heading};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
      background: ${({ theme }) => theme.primaryGradient};
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const CardExcerpt = styled.p`
  margin-bottom: 1.8rem;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  line-height: 1.7;
  flex-grow: 1;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
  transition: gap 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primaryGradient};
    transition: width 0.3s ease;
  }
  
  &:hover {
    gap: 0.8rem;
    
    &::after {
      width: 100%;
    }
  }
`;

const BlogCard = ({ post, index }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <CardImage>
        <img src={post.image} alt={post.title} />
        <CardCategory>{post.category}</CardCategory>
      </CardImage>
      <CardBody>
        <CardMeta>
          <MetaItem>
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" />
            {post.date}
          </MetaItem>
        </CardMeta>
        <CardTitle>
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
        <CardExcerpt>{post.excerpt}</CardExcerpt>
        <ReadMoreLink to={`/blog/${post.slug}`}>
          Lire la suite
          <FontAwesomeIcon icon={faArrowRight} size="sm" />
        </ReadMoreLink>
      </CardBody>
    </CardContainer>
  );
};

export default BlogCard;
