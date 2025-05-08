import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../Components/ContactForm';
import SocialLinks from '../Components/SocialLinks';

const ContactSection = styled.section`
  padding: 5rem 0;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const ContactContainer = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const ContactInfoTitle = styled(motion.h3)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ContactInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactInfoItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const ContactInfoContent = styled.div`
  h4 {
    margin-bottom: 0.4rem;
    font-size: 1.1rem;
  }
  
  p, a {
    color: ${({ theme }) => theme.textLight};
    line-height: 1.6;
  }
  
  a {
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const SocialContainer = styled.div`
  margin-top: 2.5rem;
  
  h4 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

const FormContainer = styled.div`
  @media (max-width: 992px) {
    margin-top: 1rem;
  }
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

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle
          as={motion.h2}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Contact
        </SectionTitle>
        
        <SectionSubtitle
          as={motion.p}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Vous avez un projet en tête ou une opportunité professionnelle à discuter ?
          N'hésitez pas à me contacter, je serais ravi d'échanger avec vous.
        </SectionSubtitle>
        
        <ContactGrid>
          <ContactInfo>
            <ContactInfoTitle
              as={motion.h3}
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              Mes informations de contact
            </ContactInfoTitle>
            
            <ContactInfoList as={motion.ul} variants={staggerContainer} initial="hidden" animate="visible">
              <ContactInfoItem variants={slideUp}>
                <IconWrapper>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </IconWrapper>
                <ContactInfoContent>
                  <h4>Localisation</h4>
                  <p>Sousse, Tunisie</p>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem variants={slideUp}>
                <IconWrapper>
                  <FontAwesomeIcon icon={faEnvelope} />
                </IconWrapper>
                <ContactInfoContent>
                  <h4>Email</h4>
                  <a href="mailto:ahmed.ghliss@example.com">ahmed.ghliss@example.com</a>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem variants={slideUp}>
                <IconWrapper>
                  <FontAwesomeIcon icon={faPhone} />
                </IconWrapper>
                <ContactInfoContent>
                  <h4>Téléphone</h4>
                  <a href="tel:+21612345678">+216 12 345 678</a>
                </ContactInfoContent>
              </ContactInfoItem>
            </ContactInfoList>
            
            <SocialContainer
              as={motion.div}
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <h4>Retrouvez-moi sur</h4>
              <SocialLinks />
            </SocialContainer>
          </ContactInfo>
          
          <FormContainer>
            <ContactForm />
          </FormContainer>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
