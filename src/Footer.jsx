import React from 'react';
import './footer.css';
import './App.css';

const FooterComponent = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h3>Felbled Info</h3>
        <ul>
          <li><a href="mailto:info@felbled.com">Email: info@felbled.com</a></li>
          <li><a href="mailto:dg@felbled.com"> dg@felbled.com</a></li>
          <li><a href="#services">Phone: +216 53270270</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Liens Rapides</h3>
        <ul>
          <li><a href="tunisie/Bizerte">Bizerte</a></li>
          <li><a href="tunisie/Tunis">Tunis</a></li>
          <li><a href="tunisie/Sousse">Sousse</a></li>
          <li><a href="tunisie/Medenine">Médenine</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Suivez Nous</h3>
        <ul>
        <li><a href="https://www.facebook.com/profile.php?id=61571253933313">Facebook</a></li>
          <li><a href="https://www.instagram.com/felblad.bigdata/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/felblad-platform-4aa8b5337/">LinkedIN</a></li>
          <li><a href="https://www.tiktok.com/@felbled.platform">Tiktok</a></li>
          <li><a href="https://x.com/felblad">X</a></li>
          <li><a href="https://www.snapchat.com/add/felbled.bigdata">Snapchat</a></li>
          <li><a href="https://www.youtube.com/@felbled">Youtube</a></li>


        </ul>
       <div className="footer">
        <p>&copy; 2025 Felbled. All rights reserved.</p>
      </div></div>
     
    </div>
  );
};

export default FooterComponent;
