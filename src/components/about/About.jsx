import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
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
            Soy un profesional apasionado Developer. Mi enfoque se basa en la excelencia y la eficiencia,
            buscando siempre superar las expectativas y entregar resultados de
            calidad. Poseo habilidades destacadas en FrontEnd con ReactJS.
            Soy creativo, orientado a soluciones y tengo una sólida capacidad de
            comunicación y trabajo en equipo. Estoy constantemente buscando
            oportunidades para aprender y crecer profesionalmente. Creo
            firmemente en la ética laboral, la integridad y el trabajo en
            equipo. Mi objetivo es contribuir de manera significativa al éxito
            de la organización, aportando mis habilidades, conocimientos y
            pasión
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
