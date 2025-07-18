import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;