import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            ¡Hola! Soy Daniel Rangel, un Desarrollador Frontend especializado
            en React y React Native con 2 años de experiencia. Soy una persona
            autónoma, positiva, me apasiona entender por completo
            los proyectos en los que participo. Tengo experiencia en diversas
            etapas del ciclo de desarrollo de software, desde escribir
            aplicaciones desde cero y construir MVP, hasta mantener y mejorar
            código legacy. He trabajado tanto en proyectos individuales como en
            equipos grandes, lo que me ha brindado la capacidad de colaborar y
            adaptarme a diferentes entornos de trabajo. Mi objetivo es utilizar
            mis habilidades técnicas y mi enfoque proactivo para desarrollar
            soluciones innovadoras y de calidad. Disfruto enfrentando nuevos
            desafíos y aprendiendo constantemente para mejorar mis habilidades
            como desarrollador.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
