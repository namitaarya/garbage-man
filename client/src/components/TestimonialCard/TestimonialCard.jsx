import React from "react";
import "./style.css";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ data }) => {
  return (
    <div className="testimonial_card">
      <div className="upper">
        <div className="profile">
          <img src={data.icon} alt={data.name} />
        </div>
        <div className="rating">
          <div className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
          <h6>{data.head}</h6>
        </div>
      </div>
      <div className="lower">
        <p>
          {data.feedback}
          <img src="/Asset/quote.png" className="quote" alt="" />
        </p>
        <img src={data.companyLogo} alt="" />
      </div>
    </div>
  );
};

export default TestimonialCard;
