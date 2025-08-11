import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyInquiry from './components/StickyInquiry';
import './styles/animations.css';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
      <StickyInquiry />
    </div>
  );
}

export default App;