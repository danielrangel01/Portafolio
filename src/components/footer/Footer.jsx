import React from "react";
import "./footer.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Daniel Rangel
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experioence</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/">
          <FiFacebook />
        </a>
        <a href="https://instagram.com/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/">
          <FiTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Daniel Rangel. All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
