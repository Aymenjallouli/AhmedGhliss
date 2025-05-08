import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.footerBg};
  padding: 3rem 0 2rem;
  margin-top: 3rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
  
  span {
    color: ${({ theme }) => theme.text};
  }
`;

const FooterText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textLight};
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.primary};
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.textLight};
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.textLight};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  margin-top: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.textLight};
  font-size: 0.9rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <FooterLogo>Ahmed<span>Ghliss</span></FooterLogo>
          <FooterText>
            Développeur Full Stack passionné, spécialisé en Angular, Spring Boot et DevOps, 
            créant des applications web rapides et fiables.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
            <SocialIcon href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLinks>
            <li><FooterLink href="/">Accueil</FooterLink></li>
            <li><FooterLink href="/projects">Projets</FooterLink></li>
            <li><FooterLink href="/contact">Contact</FooterLink></li>
            <li><FooterLink href="/blog">Blog</FooterLink></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterLinks>
            <li>
              <FooterLink href="mailto:contact@ahmedghliss.com">
                <FontAwesomeIcon icon={faEnvelope} />
                contact@ahmedghliss.com
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </FooterLink>
            </li>
          </FooterLinks>
        </FooterSection>
      </FooterContainer>
      
      <FooterContainer>
        <Copyright>
          &copy; {currentYear} Ahmed Ghliss. Tous droits réservés.
        </Copyright>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
