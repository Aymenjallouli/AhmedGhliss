import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';

const FormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.2);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.textLight};
    opacity: 0.7;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundAlt};
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.2);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.textLight};
    opacity: 0.7;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  align-self: flex-start;
  
  &:disabled {
    background-color: ${({ theme }) => theme.textLight};
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.error};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled(motion.div)`
  background-color: ${({ theme }) => theme.success};
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
`;

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1 
    } 
  }
};

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
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
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Adresse email invalide';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    return newErrors;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Réinitialiser le message de succès après 5 secondes
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 2000);
    
    // Pour une implémentation réelle, vous pouvez utiliser un service comme EmailJS ou votre propre backend
    // try {
    //   const response = await emailjs.send(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     formData,
    //     'YOUR_USER_ID'
    //   );
    //   setIsSubmitting(false);
    //   setIsSuccess(true);
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    // } catch (error) {
    //   setIsSubmitting(false);
    //   setErrors({ form: 'Une erreur est survenue. Veuillez réessayer.' });
    // }
  };
  
  return (
    <>
      {isSuccess && (
        <SuccessMessage
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.
        </SuccessMessage>
      )}
      
      <FormContainer
        onSubmit={handleSubmit}
        as={motion.form}
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <FormGroup as={motion.div} variants={formItemVariants}>
          <Label htmlFor="name">Nom</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup as={motion.div} variants={formItemVariants}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup as={motion.div} variants={formItemVariants}>
          <Label htmlFor="subject">Sujet</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Sujet de votre message"
          />
          {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup as={motion.div} variants={formItemVariants}>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message ici..."
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </FormGroup>
        
        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          variants={formItemVariants}
        >
          {isSubmitting ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin /> Envoi en cours...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faPaperPlane} /> Envoyer
            </>
          )}
        </SubmitButton>
      </FormContainer>
    </>
  );
};

export default ContactForm;
