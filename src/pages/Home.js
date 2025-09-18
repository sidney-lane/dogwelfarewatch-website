import React from 'react';
import Hero from '../components/Hero/Hero';
import Mission from '../components/Mission/Mission';
import FocusAreas from '../components/FocusAreas/FocusAreas';
import Gallery from '../components/Gallery/Gallery';
import Blog from '../components/Blog/Blog';
import About from '../components/About/About';

const Home = () => {
  return (
    <>
      <Hero />
      <Mission />
      <FocusAreas />
      <Gallery />
      <Blog />
      <About />
    </>
  );
};

export default Home;