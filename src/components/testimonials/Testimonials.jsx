import React from "react";
import AVTR1 from "../../assets/stiven-profile.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Stiven Jimenez",
    review:
      "Durante mi tiempo trabajando con Daniel en nuestro proyecto, he observado su habilidad para resolver problemas complejos y adaptarse rápidamente a nuevas tecnologías. Su compromiso con la calidad del código y su facilidad para trabajar en equipo son notables.",
  },
  {
    avatar: AVTR2,
    name: "Rafael Prieto",
    review:
    "Durante mi tiempo trabajando con Daniel en nuestro proyecto, he observado su habilidad para resolver problemas complejos y adaptarse rápidamente a nuevas tecnologías. Su compromiso con la calidad del código y su facilidad para trabajar en equipo son notables.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
