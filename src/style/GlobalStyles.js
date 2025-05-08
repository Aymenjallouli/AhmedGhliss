import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in-out;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.heading};
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .section {
    padding: 5rem 0;

    @media (max-width: 768px) {
      padding: 3rem 0;
    }
  }

  .section-title {
    position: relative;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    text-align: center;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 4px;
      background-color: ${({ theme }) => theme.primary};
    }
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: ${({ theme }) => theme.primary};
    color: #fff;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: ${({ theme }) => theme.primaryHover};
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    &:active {
      transform: translateY(-1px);
    }
  }

  .btn-outline {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    
    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: #fff;
    }
  }

  .text-center {
    text-align: center;
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

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

export default GlobalStyles;
