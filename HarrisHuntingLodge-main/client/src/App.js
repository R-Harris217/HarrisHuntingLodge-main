import logo from './logo.svg';
import './App.css';
import React from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import Home from './components/Home';
import HomePage from './components/HomePage';
import Bannerr from './components/Bannerr';
import Navbar from './components/Navbar';
import lodgelogo from './assets/logo.png';
import additionalLogo from './assets/logo.png.png';


function App() {
  return (
    <div className="App">
      <Bannerr lodgeLogo={lodgelogo} additionalLogo={additionalLogo} />
      <Navbar />
     
      
      
    </div>
  );
}

export default App;
