import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CounterCards from "./countercard";

const Counter = () => {
  return (
    <div className="header">
      <div className="slide-item"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://n-o-v-a.com/wp-content/uploads/2018/09/Recycle-blog-image-1500x987-1.jpg')`,
          backgroundSize: "cover",
          backgroundColor: "black",
          backgroundRepeat: "no-repeat",
          width: "100%",
          display:"flex",
        }}
      >
        <div style={{
          textAlign: "center",
          marginTop: "8%",
          marginLeft: "30%",
          width: "40%",
          position: "absolute"
        }}>
          <h1 style={{ color: "white", marginRight: "10px", fontSize: "90px", paddingRight: "10px" }}>Recycle today</h1>
          <h2 style={{ color: "white", marginRight: "10px", fontSize: "50px", paddingRight: "10px" }}>for a better tomorrow</h2>
        </div>
        <div style={{
          display: "flex",
        }}>
          <CounterCards />
        </div>
      </div>
    </div>
  );
};

export default Counter;
