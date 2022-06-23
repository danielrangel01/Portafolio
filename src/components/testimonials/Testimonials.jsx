import React from "react";
import AVTR1 from "../../assets/avatar1.jpg";
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
    name: "Rachel Stain",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi unde cupiditate repellendus ut impedit atque deleniti a mollitia optio laboriosam.",
  },
  {
    avatar: AVTR2,
    name: "Louis Litt",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi unde cupiditate repellendus ut impedit atque deleniti a mollitia optio laboriosam.",
  },
  {
    avatar: AVTR3,
    name: "Mike Ross",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi unde cupiditate repellendus ut impedit atque deleniti a mollitia optio laboriosam.",
  },
  {
    avatar: AVTR4,
    name: "Dona Pilsen",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi unde cupiditate repellendus ut impedit atque deleniti a mollitia optio laboriosam.",
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
