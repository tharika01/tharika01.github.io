import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;