import React, { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import './app.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import LazySection from './components/LazySection';

const About = lazy(() => import('./components/about/About'));
const Skills = lazy(() => import('./components/skills/Skills'));
const Qualification = lazy(() => import('./components/qualification/Qualification'));
const Services = lazy(() => import('./components/services/Services'));
const Work = lazy(() => import('./components/work/Work'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));

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

const sectionFallback = (
  <div className="section-loading" role="status" aria-live="polite">
    Loading section…
  </div>
);

const App = () => {
  const [themeState, setThemeState] = useState(getInitialThemeState);
  const { theme } = themeState;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'dark');

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#090b1a' : '#f5f6ff');
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
      <main className="main">
        <Home />
        <Suspense fallback={sectionFallback}>
          <LazySection placeholderId="about" minHeight={560}>
            <About />
          </LazySection>
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <LazySection placeholderId="skills" minHeight={420}>
            <Skills />
          </LazySection>
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <LazySection placeholderId="qualification" minHeight={640}>
            <Qualification />
          </LazySection>
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <LazySection placeholderId="services" minHeight={560}>
            <Services />
          </LazySection>
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <LazySection placeholderId="work" minHeight={540}>
            <Work />
          </LazySection>
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <LazySection placeholderId="contact" minHeight={640}>
            <Contact />
          </LazySection>
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <LazySection minHeight={240}>
            <Footer />
          </LazySection>
        </Suspense>
      </main>
    </>
  );
};

export default App;
