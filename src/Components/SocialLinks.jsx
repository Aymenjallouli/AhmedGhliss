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
  gap: ${(props) => props.$vertical ? '0.75rem' : '1rem'};
  flex-direction: ${(props) => props.$vertical ? 'column' : 'row'};
  align-items: center;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$size || '2.5rem'};
  height: ${(props) => props.$size || '2.5rem'};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.textLight};
  font-size: ${(props) => props.$iconSize || '1.2rem'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadow};
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
      ease: "easeOut"
    }
  })
};

const SocialLinks = ({ vertical = false, size, iconSize }) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://linkedin.com/',
    },
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/',
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      url: 'https://twitter.com/',
    },
    {
      name: 'Dev.to',
      icon: faDev,
      url: 'https://dev.to/',
    },
    {
      name: 'Medium',
      icon: faMedium,
      url: 'https://medium.com/',
    },
  ];

  return (
    <SocialContainer $vertical={vertical}>
      {socialLinks.map((social, i) => (
        <SocialIcon
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          $size={size}
          $iconSize={iconSize}
          custom={i}
          variants={socialIconVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={social.icon} />
        </SocialIcon>
      ))}
    </SocialContainer>
  );
};

export default SocialLinks;
