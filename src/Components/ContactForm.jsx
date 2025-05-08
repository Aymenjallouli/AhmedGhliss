import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner, faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const FormContainer = styled(motion.form)`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  margin-bottom: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  
  span {
    color: ${({ theme }) => theme.primary};
    margin-left: 0.25rem;
  }
`;

const Input = styled.input`
  padding: 1rem 1.2rem;
  border: 2px solid ${({ theme, $hasError }) => $hasError ? theme.error : theme.border};
  border-radius: 12px;
  background-color: ${({ theme }) => `${theme.backgroundAlt}80`};
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: ${({ $hasError, theme }) => 
    $hasError ? `0 0 0 2px ${theme.error}20` : 'none'};
  
  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => $hasError ? theme.error : theme.primary};
    box-shadow: ${({ theme, $hasError }) => 
      $hasError 
        ? `0 0 0 3px ${theme.error}20` 
        : `0 0 0 3px ${theme.primary}20`};
    background-color: ${({ theme }) => theme.background};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.textLight};
    opacity: 0.6;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem 1.2rem;
  border: 2px solid ${({ theme, $hasError }) => $hasError ? theme.error : theme.border};
  border-radius: 12px;
  background-color: ${({ theme }) => `${theme.backgroundAlt}80`};
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  box-shadow: ${({ $hasError, theme }) => 
    $hasError ? `0 0 0 2px ${theme.error}20` : 'none'};
  
  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) => $hasError ? theme.error : theme.primary};
    box-shadow: ${({ theme, $hasError }) => 
      $hasError 
        ? `0 0 0 3px ${theme.error}20` 
        : `0 0 0 3px ${theme.primary}20`};
    background-color: ${({ theme }) => theme.background};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.textLight};
    opacity: 0.6;
  }
`;

const ErrorMessage = styled(motion.div)`
  color: ${({ theme }) => theme.error};
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.primaryGradient};
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  margin-top: 1rem;
  box-shadow: 0 8px 15px ${({ theme }) => `${theme.primary}30`};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 20px ${({ theme }) => `${theme.primary}40`};
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  .icon-spin {
    animation: spin 1s infinite linear;
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 1.5rem;
  background-color: ${({ theme }) => `${theme.success}20`};
  border: 2px solid ${({ theme }) => theme.success};
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.success};
  font-weight: 500;
  
  .icon {
    background-color: ${({ theme }) => theme.success};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = "Le nom est requis";
      isValid = false;
    }
    
    if (!formData.email) {
      tempErrors.email = "L'email est requis";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "L'email est invalide";
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = "Le sujet est requis";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Le message est requis";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Le message doit contenir au moins 10 caractères";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <FormContainer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
    >
      <FormRow>
        <FormGroup>
          <Label htmlFor="name">Nom<span>*</span></Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            $hasError={errors.name}
          />
          {errors.name && (
            <ErrorMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FontAwesomeIcon icon={faExclamationTriangle} size="sm" />
              {errors.name}
            </ErrorMessage>
          )}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="email">Email<span>*</span></Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            $hasError={errors.email}
          />
          {errors.email && (
            <ErrorMessage
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FontAwesomeIcon icon={faExclamationTriangle} size="sm" />
              {errors.email}
            </ErrorMessage>
          )}
        </FormGroup>
      </FormRow>
      
      <FormGroup>
        <Label htmlFor="subject">Sujet<span>*</span></Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          placeholder="Sujet de votre message"
          value={formData.subject}
          onChange={handleChange}
          $hasError={errors.subject}
        />
        {errors.subject && (
          <ErrorMessage
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FontAwesomeIcon icon={faExclamationTriangle} size="sm" />
            {errors.subject}
          </ErrorMessage>
        )}
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="message">Message<span>*</span></Label>
        <TextArea
          id="message"
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          $hasError={errors.message}
        />
        {errors.message && (
          <ErrorMessage
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FontAwesomeIcon icon={faExclamationTriangle} size="sm" />
            {errors.message}
          </ErrorMessage>
        )}
      </FormGroup>
      
      <SubmitButton
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? (
          <>
            <FontAwesomeIcon icon={faSpinner} className="icon-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPaperPlane} />
            Envoyer le message
          </>
        )}
      </SubmitButton>
      
      {submitSuccess && (
        <SuccessMessage
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div>Votre message a été envoyé avec succès. Je vous répondrai dès que possible.</div>
        </SuccessMessage>
      )}
    </FormContainer>
  );
};

export default ContactForm;
