import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

// Import des pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// Import des composants
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Import des thèmes
import { lightTheme, darkTheme } from './style/theme';
import GlobalStyles from './style/GlobalStyles';

const App = () => {
  // État pour le mode sombre/clair
  const [theme, setTheme] = useState('dark');

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Charger le thème depuis le localStorage au chargement de la page
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
