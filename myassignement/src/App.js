import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Education from './components/Education';
import Work from './components/Work.js';
import Footer from './components/footer.js';
import Preloader from './components/Preloader.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (for example, fetching data or waiting for assets)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide preloader after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);

  return (
    <div>
      {isLoading ? (
        // Show Preloader if loading
        <Preloader />
      ) : (
        // Render the rest of the content once loading is complete
        <>
          <Header />
          <HeroSection />
          <About />
          <Skills />
          <Education />
          <Work />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
