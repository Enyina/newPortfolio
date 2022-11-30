import "./testimonials.css";
import AVT1 from "../../assets/nte.jpg";
import AVT2 from "../../assets/prof.jpg";
import AVT3 from "../../assets/tayo.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "Nte Matthew",
    review:
      "Since having our new website built by Enyina Matthew, we have seen a steady increase in the number of payment checkouts by customers which has helped increase our revenue. The end result of his work for us was a website that is interactive and effective.",
  },
  {
    avatar: AVT2,
    name: "Abiodun Ayobami",
    review:
      "Enyina Matthew is a true professional in every aspect. He has been comprehensive and competent throughout the process of our working together. The reaction to the wedsite and app he built has been overwhelmingly positive. His work is fantastic",
  },
  {
    avatar: AVT3,
    name: "Temitayo Diadem Adegoke",
    review:
      "Enyina Matthew is a great person to work with. He handles our backend development and search engine optimization. He is a professional and dedicated to offering nothing but excellence. It has been a pleasure working with him.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
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
