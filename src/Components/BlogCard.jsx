import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTag, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled(motion.article)`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const CardMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textLight};
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.heading};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const CardExcerpt = styled.p`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  transition: gap 0.3s ease;
  
  &:hover {
    gap: 0.8rem;
  }
`;

const BlogCard = ({ post, index }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <CardImage src={post.image} alt={post.title} />
      <CardBody>
        <CardMeta>
          <MetaItem>
            <FontAwesomeIcon icon={faCalendarAlt} size="sm" />
            {post.date}
          </MetaItem>
          <MetaItem>
            <FontAwesomeIcon icon={faTag} size="sm" />
            {post.category}
          </MetaItem>
        </CardMeta>
        <CardTitle>
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
        <CardExcerpt>
          {post.excerpt}
        </CardExcerpt>
        <ReadMoreLink to={`/blog/${post.slug}`}>
          Lire plus <FontAwesomeIcon icon={faArrowRight} />
        </ReadMoreLink>
      </CardBody>
    </CardContainer>
  );
};

export default BlogCard;
