import { createGlobalStyle } from 'styled-components';
import '@fontsource/space-grotesk';
import '@fontsource/dm-sans';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    line-height: 1.75;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.heading};
    letter-spacing: -0.02em;
  }
  p {
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    font-weight: 400;
    opacity: 0.9;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-weight: 500;
    position: relative;
    
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
      transform: translateY(-2px);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${({ theme }) => theme.primaryGradient};
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  ::selection {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }

  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 2.5rem;

    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }
  }
  .section {
    padding: 8rem 0;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      padding: 5rem 0;
    }
  }

  .section-title {
    position: relative;
    margin-bottom: 4rem;
    font-size: 3.5rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    display: inline-block;
    
    &::before {
      content: '';
      position: absolute;
      bottom: -0.8rem;
      left: 0;
      width: 60%;
      height: 6px;
      background: ${({ theme }) => theme.primaryGradient};
      border-radius: 3px;
    }
    
    &::after {
      content: attr(data-subtitle);
      position: absolute;
      top: -1.8rem;
      left: 0;
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.secondary};
      text-transform: uppercase;
      letter-spacing: 3px;
      opacity: 0.8;
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2.5rem;
    background: ${({ theme }) => theme.primaryGradient};
    color: ${({ theme }) => theme.buttonText};
    font-weight: 600;
    font-size: 1rem;
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.secondaryHover};
      z-index: -1;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(114, 9, 183, 0.3);
      
      &::before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
    
    &:active {
      transform: translateY(-2px);
    }
  }
  .btn-outline {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    
    &::before {
      background: ${({ theme }) => theme.primary};
    }
    
    &:hover {
      color: ${({ theme }) => theme.buttonText};
    }
  }
  
  .blob-bg {
    position: absolute;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.15;
    z-index: -1;
    
    &.blob-1 {
      background-color: ${({ theme }) => theme.primary};
      top: -400px;
      right: -200px;
    }
    
    &.blob-2 {
      background-color: ${({ theme }) => theme.secondary};
      bottom: -400px;
      left: -200px;
    }
    
    &.blob-3 {
      background-color: ${({ theme }) => theme.accent};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .text-center {
    text-align: center;
  }
  
  .text-gradient {
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .mb-1 {
    margin-bottom: 1rem;
  }

  .mb-2 {
    margin-bottom: 2rem;
  }

  .mb-3 {
    margin-bottom: 3rem;
  }
  
  .mb-5 {
    margin-bottom: 5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
  }
  
  .card {
    background-color: ${({ theme }) => theme.cardBg};
    border-radius: 16px;
    box-shadow: ${({ theme }) => theme.cardShadow};
    overflow: hidden;
    transition: all 0.4s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: ${({ theme }) => `0 25px 50px rgba(0, 0, 0, 0.1)`};
    }
  }
`;

export default GlobalStyles;
