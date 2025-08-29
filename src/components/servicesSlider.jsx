import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ServicesSlider = ({ direction, data }) => {
  return (
    <Swiper
      //   slidesPerView="auto"
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={6000}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
      dir={direction}
      style={{ transitionTimingFunction: "linear" }}
    >
      {data.map((d, index) => (
        <SwiperSlide key={index}>
          <a href="">
            <div className="service-card my-3">
              <div className="service-card-icon fs-1 p-3 rounded-circle d-flex align-items-center justify-content-center mb-3">
                {d.icon}
              </div>
              <span>{d.title}</span>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesSlider;
