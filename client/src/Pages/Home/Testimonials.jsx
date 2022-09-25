import React from "react";
import { TestimonialCard } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const data = [
    {
      icon: "/Asset/user (1).jpg",
      feedback:
        "No matter where you go, waste management is the coolest, most happening thing around! Your company is truly upstanding and is behind its product 100%.",
      rating: 5,
      head: "Great job and fair pricing",
      companyLogo: "/Asset/mcdonalds.png",
    },
    {
      icon: "/Asset/user (2).jpg",
      feedback:
        "No matter where you go, waste management is the coolest, most happening thing around! Your company is truly upstanding and is behind its product 100%.",
      rating: 5,
      head: "Great job and fair pricing",
      companyLogo: "/Asset/leaf.png",
    },
    {
      icon: "/Asset/user (3).jpg",
      feedback:
        "No matter where you go, waste management is the coolest, most happening thing around! Your company is truly upstanding and is behind its product 100%.",
      rating: 5,
      head: "Great job and fair pricing",
      companyLogo: "/Asset/iron-bar.png",
    },
    {
      icon: "/Asset/user (4).jpg",
      feedback:
        "No matter where you go, waste management is the coolest, most happening thing around! Your company is truly upstanding and is behind its product 100%.",
      rating: 5,
      head: "Great job and fair pricing",
      companyLogo: "/Asset/recycle-bin.png",
    },
  ];
  return (
    <div className="testimonial">
      <h1>Feedback From Our Happy Clients</h1>
      <div className="testimonials_container">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          grabCursor={true}
          loop={true}
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx} >
              <TestimonialCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
