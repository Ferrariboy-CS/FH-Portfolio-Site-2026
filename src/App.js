import React, { useCallback, useEffect, useState } from 'react';
import "./app.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const THEME_STORAGE_KEY = 'theme-preference';

const getInitialThemeState = () => {
  if (typeof window === 'undefined') {
    return { theme: 'light', isManual: false };
  }

  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return { theme: storedTheme, isManual: true };
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return { theme: prefersDark ? 'dark' : 'light', isManual: false };
  } catch (error) {
    return { theme: 'light', isManual: false };
  }
};

const App = () => {
  const [themeState, setThemeState] = useState(getInitialThemeState);
  const { theme } = themeState;

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle('dark-theme', theme === 'dark');

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0f' : '#ffffff');
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setThemeState((current) => {
        if (current.isManual) {
          return current;
        }
        return { theme: event.matches ? 'dark' : 'light', isManual: false };
      });
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const nextTheme = current.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch (error) {
        // Ignore write errors (e.g. private mode)
      }
      return { theme: nextTheme, isManual: true };
    });
  }, []);

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
