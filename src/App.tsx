import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { isDark } = useDarkMode();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Layout>
      <div>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
