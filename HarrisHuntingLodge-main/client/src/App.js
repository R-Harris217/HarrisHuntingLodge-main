import React from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import Home from './components/Home';
import HomePage from './components/HomePage';
import Bannerr from './components/Bannerr';
import lodgelogo from './assets/HarrisHuntingLogo.png';

function App() {
  return (
    <div className="App">
      <Bannerr lodgeLogo={lodgelogo} />
    </div>
  );
}

export default App;
