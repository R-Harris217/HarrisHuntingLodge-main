import React, { useState, useEffect } from "react";
import styles from "./Banner.module.css";
import { Link } from "@reach/router";
import axios from "axios";
import { FaBars } from "react-icons/fa";

function Bannerr({ lodgeLogo }) {
  const [weatherIconSrc, setWeatherIconSrc] = useState("");
  const [temperature, setTemperature] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const fetchWeather = async () => {
    const apiKey = "5d266d214cee8ca2482175486a3d6eec";
    const city = "Licking";
    const state = "MO";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=${apiKey}&units=imperial`;

    try {
      const response = await axios.get(url);
      const weatherData = response.data;
      const iconCode = weatherData.weather[0].icon;
      setWeatherIconSrc(`https://openweathermap.org/img/wn/${iconCode}.png`);
      setTemperature(`${Math.round(weatherData.main.temp)}°F`);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.mobileNav}`) && !event.target.closest(`.${styles.mobileMenuIcon}`)) {
        setMobileNavOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.mobileMenuIcon} onClick={toggleMobileNav}>
          <FaBars />
        </div>
        {lodgeLogo && (
          <img
            className={styles.logo}
            src={lodgeLogo}
            alt="Harris Hunting Lodge logo"
          />
        )}
        <div className={styles.titleAndLocation}>
          <h1 className={styles.title}>Harris Hunting</h1>
          <p className={styles.location}>Licking, MO</p>
        </div>
        <div className={styles.rightSection}>
          <p className={styles.email}>harrishuntinglodge@gmail.com</p>
          <div className={styles.weather}>
            <span className={styles.weatherText}>
              Current weather & time in Licking, MO:{" "}
            </span>
            <img
              className={styles.weatherImg}
              src={weatherIconSrc}
              alt="Weather icon"
            />
            <span className={styles.temperature}>{temperature}</span>
            <span className={styles.currentTime}>{currentTime}</span>
          </div>

          <div className={styles.navLinks}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <Link to="/about" className={styles.navLink}>
              About Us
            </Link>
            <Link to="/gallery" className={styles.navLink}>
              Gallery
            </Link>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
          </div>
        </div>
      </div>
      {mobileNavOpen && (
      <div className={`${styles.mobileNav} ${mobileNavOpen ? styles.mobileNavOpen : ''}`}>
        <button className={styles.closeButton} onClick={() => setMobileNavOpen(false)}>X</button>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About Us</Link>
        <Link to="/gallery" className={styles.navLink}>Gallery</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </div>
    )}
    <div className={styles.infoBar}>
      
      <div className={styles.weather}>
        <span className={styles.weatherText}>Current weather & time in Licking, MO: </span>
        <img className={styles.weatherImg} src={weatherIconSrc} alt="Weather icon" />
        <span className={styles.temperature}>{temperature}</span>
        <span className={styles.currentTime}>{currentTime}</span>
      </div>
      <p className={styles.email}>harrishuntinglodge@gmail.com</p>
    </div>
  </div>
);
}

export default Bannerr;
