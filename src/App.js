import './App.css';  // make sure this exists in src/

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Mission from './components/Mission/Mission';
import FocusAreas from './components/FocusAreas/FocusAreas';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Mission />
      <FocusAreas />
      <Gallery />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}