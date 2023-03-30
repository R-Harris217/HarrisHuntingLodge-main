import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';
import { Link } from '@reach/router';
import axios from 'axios';

function Bannerr({ lodgeLogo }) {
  const [weatherIconSrc, setWeatherIconSrc] = useState('');
  const [temperature, setTemperature] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const fetchWeather = async () => {
    const apiKey = '5d266d214cee8ca2482175486a3d6eec';
    const city = 'Licking';
    const state = 'MO';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=${apiKey}&units=imperial`;

    try {
      const response = await axios.get(url);
      const weatherData = response.data;
      const iconCode = weatherData.weather[0].icon;
      setWeatherIconSrc(`https://openweathermap.org/img/wn/${iconCode}.png`);
      setTemperature(`${Math.round(weatherData.main.temp)}°F`);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.headerContainer}>
      {lodgeLogo && <img className={styles.logo} src={lodgeLogo} alt="Harris Hunting Lodge logo" />}
      <div className={styles.titleAndLocation}>
        <h1 className={styles.title}>Harris Hunting</h1>
        <p className={styles.location}>Licking, MO</p>
      </div>
      <div className={styles.rightSection}>
        <p className={styles.email}>harrishuntinglodge@gmail.com</p>
        <div className={styles.weather}>
        <span className={styles.weatherText}>Current weather & time in Licking, MO: </span>
          <img className={styles.weatherImg} src={weatherIconSrc} alt="Weather icon" />
          <span className={styles.temperature}>{temperature}</span>
          <span className={styles.currentTime}>{currentTime}</span>
        </div>
        
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About Us</Link>
          <Link to="/gallery" className={styles.navLink}>Gallery</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Bannerr;
