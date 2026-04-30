import { useState, useEffect, Suspense, lazy } from 'react';
import Layout from './components/Layout';
import AnimatedCursor from './components/AnimatedCursor';
import ScrollProgress from './components/ScrollProgress';
import KonamiCode from './components/KonamiCode';
import IntroOverlay from './components/IntroOverlay';
import ParticleField from './components/ParticleField';
import { useReducedMotion } from './hooks/useReducedMotion';

// Lazy load sections for performance
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  const [introDone, setIntroDone] = useState(false);
  const prefersReduced = useReducedMotion();

  // Optionally skip intro if reduced motion
  useEffect(() => {
    if (prefersReduced) setIntroDone(true);
  }, [prefersReduced]);

  if (!introDone) {
    return <IntroOverlay onComplete={() => setIntroDone(true)} />;
  }

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-x-hidden">
      <AnimatedCursor />
      <ScrollProgress />
      <KonamiCode />
      <Layout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full animate-spin" /></div>}>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </Suspense>
      </Layout>
      <ParticleField />
    </div>
  );
}

export default App;
