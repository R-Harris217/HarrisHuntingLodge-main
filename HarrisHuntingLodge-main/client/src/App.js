import React from 'react';
import { navigate, Router, Link } from '@reach/router';
import axios from 'axios';
import Banner from './components/Banner';
import lodgelogo from './assets/HarrisHuntingLogo.png';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Banner lodgeLogo={lodgelogo} />
      <Router>
        <Home path="/" />
        <AboutUs path="/about" />
        <Gallery path="/gallery" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

export default App;
