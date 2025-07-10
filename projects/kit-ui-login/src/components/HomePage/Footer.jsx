// Footer.jsx
import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <hr></hr>
      <div className="content-footer">
        <div className="content-left">
          <img src="../src/assets/icon2/icon.png"></img>
          <h1>Candleaf</h1>
          <pre>
            Your natural candle made for your home and for your wellness.
          </pre>
        </div>
        <div className="content-right">
          <ul>
            <li style={{ color: "green" }}>Discovery</li>
            <li>New season</li>
            <li>Most searched</li>
            <li>Most selled</li>
          </ul>
          <ul>
            <li style={{ color: "green" }}>About</li>
            <li>Help</li>
            <li>Shipping</li>
            <li>Affiliate</li>
          </ul>
          <ul>
            <li style={{ color: "green" }}>Info</li>
            <li>Contact us</li>
            <li>Privacy Policies</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
