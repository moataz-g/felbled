import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Logo1 from "./public/logoR.png";
import { MdViewList, MdGTranslate } from "react-icons/md";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";

const App = () => {
  const { i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageDropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goToSection = (section) => {
    setActiveSection(section);
    setIsMobileNavbarOpen(false);
    navigate("/", { state: { activeSection: section } });
  };

  const handleLanguageChange = (language) => {
    if (language === "French") i18n.changeLanguage("fr");
    else if (language === "Arabic") i18n.changeLanguage("ar");
    else i18n.changeLanguage("en");
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div className="myApp">
      {/* Desktop Navbar */}
      <div className="navbar">
        <div className="logo-container" onClick={() => goToSection("home")}>
          <img src={Logo1} alt="Logo" className="logo1" />
        </div>

        <div className="icons-container">
          <button
            className={`icon ${activeSection === "home" ? "active" : ""}`}
            onClick={() => goToSection("home")}
          >
            <FaHome className="icon-logo" />
            Accueil
          </button>
          <button
            className={`icon ${activeSection === "about" ? "active" : ""}`}
            onClick={() => goToSection("about")}
          >
            <FaInfoCircle className="icon-logo" />
            À propos
          </button>
          <button
            className={`icon ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => goToSection("contact")}
          >
            <FaEnvelope className="icon-logo" />
            Contact
          </button>
        </div>

        <div className="language-icon" onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}>
          <MdGTranslate />
        </div>
      </div>

      {/* Language Dropdown */}
      {isLanguageDropdownOpen && (
        <div ref={languageDropdownRef} className="language-dropdown">
          <ul>
            <li onClick={() => handleLanguageChange("English")}>
              <img src="/flags/gb.svg" alt="English" /> English
            </li>
            <li onClick={() => handleLanguageChange("French")}>
              <img src="/flags/fr.svg" alt="Français" /> Français
            </li>
            <li onClick={() => handleLanguageChange("Arabic")}>
              <img src="/flags/sa.svg" alt="العربية" /> العربية
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Navbar */}
      <div className={`mobile-navbar ${isMobileNavbarOpen ? "open" : ""}`}>
        <div className="mobile-navbar-header">
          <img
            src={Logo1}
            alt="Logo"
            className="logo1"
            onClick={() => goToSection("home")}
          />
          <div className="mobile-svgs">
            <MdGTranslate onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)} />
            <MdViewList onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)} />
          </div>
        </div>

        {isMobileNavbarOpen && (
          <div className="mobile-navbar-menu">
            <button
              className={`mobile-navbar-item ${activeSection === "home" ? "active" : ""}`}
              onClick={() => goToSection("home")}
            >
              Home
            </button>
            <button
              className={`mobile-navbar-item ${activeSection === "about" ? "active" : ""}`}
              onClick={() => goToSection("about")}
            >
              About
            </button>
            <button
              className={`mobile-navbar-item ${activeSection === "contact" ? "active" : ""}`}
              onClick={() => goToSection("contact")}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
