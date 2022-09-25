import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Header = () => {
  const sliderData = [
    {
      url: "/Asset/header-bg-1.jpg",
      heading: "Discover Services",
      paragraph:
        "Recycle your waste, save energy, conserve resources and preserve the nature of the world. Reuse yesteryear, Recycle the current, Save the near future!",
      btn: "Think outside the trash…Recycle!",
    },
    {
      url: "/Asset/header-bg-2.jpg",
      heading: "Waste Management",
      paragraph:
        "Recycle your waste, save energy, conserve resources and preserve the nature of the world. Reuse yesteryear, Recycle the current, Save the near future!",
      btn: "Since 1987",
    },
  ];
  return (
    <div className="header">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        loop={true}
        modules={[Navigation]}
      >
        {sliderData.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="slide-item"
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, .55), rgba(0, 0, 0, .55)), url(${item.url})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "",
            }}
          >
            <div className="slider-container">
              <div className="slider_btn"> {item.btn} </div>
              <h1>{item.heading}</h1>
              <p>{item.paragraph}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
