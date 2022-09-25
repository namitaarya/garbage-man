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
              background: `linear-gradient(0deg, rgba(0, 0, 0, .55), rgba(0, 0, 0, .55)), url('https://wallpaperaccess.com/full/2390200.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "",
            }}
          >
            <div>
              <h1 style = {{color: "white", marginRight:"10px", fontSize:"90px", paddingRight:"10px" }}>Recycle today</h1>
              <h2 style = {{color: "white", marginRight:"10px", fontSize:"70px" , paddingRight:"10px"}}>for a better tomorrow</h2>
            </div>
            <CounterCards />
            </div>
    </div>
  );
};

export default Counter;
