import React from "react";
import SectionHeading from "./sectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data/testimonialData";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";

const TestimonialSection = () => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi bi-star-fill ${i < rating ? "" : "text-secondary"}`}
        ></i>
      );
    }
    return stars;
  };
  return (
    // <!-- Testimonials Section -->
    <section id="testimonials" className="testimonials section">
      <SectionHeading
        sectionTitle={"Testimonials"}
        sectionSubTitle={"What are they saying"}
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true, // Adds dynamic bullets effect
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-wrap">
                <div className="testimonial-item">
                  <img
                    src={testimonial.image}
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.role}</h4>
                  <div className="stars">
                    {renderStars(testimonial.rating)}
                    {/* <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i> */}
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.quote}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
