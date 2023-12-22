import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/chatApp.png";
import IMG2 from "../../assets/pokedexApp.png";
import IMG3 from "../../assets/criptoApp.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="IMG1" className="img__proyect" />
          </div>
          <h3>Chat App React Native</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/danielrangel01/ChatApp-Front" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="IMG1" />
          </div>
          <h3>Pokedex React Native</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/danielrangel01/Pokedex" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="IMG1" />
          </div>
          <h3>Cotiza Criptomonedas al Instante</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className="btn">
              Github
            </a>
            <a
              href="https://objective-hoover-ce5afa.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        

      </div>
    </section>
  );
};

export default portfolio;
