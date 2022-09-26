import React from "react";
import CardsGroup from "./cards-group";
import Mission from "./missionandvision";

export default function AboutUs() {
  return (
    <div>
      <div
        className="image-bg"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, .55), rgba(0, 0, 0, .55)), url('/Asset/aboutusbg.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "35vh",
          width: "100%",
          backgroundPosition: "",
          padding: "4em 0",
          position: 'relative'
        }}
      >
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
          <h1
            style={{ textAlign: "center", fontSize: "4.5rem", color: "#fff" }}
          >
            About Us
          </h1>
          <p style={{ textAlign: "center", color: "#fff" }}>What we do?</p>
        </div>
      </div>
      <CardsGroup />
      <Mission />
    </div>
  );
}
