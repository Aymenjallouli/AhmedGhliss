import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faDev,
  faMedium
} from '@fortawesome/free-brands-svg-icons';

const SocialContainer = styled.div`
  display: flex;
  gap: ${(props) => props.$vertical ? '1rem' : '1.2rem'};
  flex-direction: ${(props) => props.$vertical ? 'column' : 'row'};
  align-items: center;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$size || '3rem'};
  height: ${(props) => props.$size || '3rem'};
  border-radius: 50%;
  background: ${({ theme, $variant }) => 
    $variant === 'gradient' ? theme.primaryGradient : 
    $variant === 'outlined' ? 'transparent' : 
    theme.backgroundAlt};
  
  color: ${({ theme, $variant }) => 
    $variant === 'gradient' ? '#fff' : 
    $variant === 'outlined' ? theme.text : 
    theme.textLight};
  
  font-size: ${(props) => props.$iconSize || '1.2rem'};
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: ${({ theme, $variant }) => 
    $variant === 'outlined' ? `2px solid ${theme.border}` : 'none'};
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 2px;
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: ${({ theme }) => `0 10px 20px ${theme.shadowColor}30`};
    color: ${({ theme }) => theme.primary};
    
    &:before {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(0) scale(0.95);
  }
`;

const socialIconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.175, 0.885, 0.32, 1.275]
    }
  })
};

const SocialLinks = ({ vertical = false, size, iconSize, variant = 'default' }) => {
  const socialMedia = [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/ahmed-ghliss/'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/AhmedGhliss'
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      url: 'https://twitter.com/GhlissAhmed'
    },
    {
      name: 'Dev.to',
      icon: faDev,
      url: 'https://dev.to/ahmedghliss'
    },
    {
      name: 'Medium',
      icon: faMedium,
      url: 'https://medium.com/@ahmedghliss'
    }
  ];

  return (
    <SocialContainer $vertical={vertical}>
      {socialMedia.map((social, index) => (
        <SocialIcon
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitez mon profil ${social.name}`}
          $size={size}
          $iconSize={iconSize}
          $variant={variant}
          custom={index}
          variants={socialIconVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={social.icon} />
        </SocialIcon>
      ))}
    </SocialContainer>
  );
};

export default SocialLinks;
