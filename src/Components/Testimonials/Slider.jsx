import React from "react";
import "./Testimonials.css";

const Slider = ({ name, image, span, description }) => {
  return (
    <div className="slide">
      <div className="user-info">
        <img src={image} alt="" />
        <div>
          <h3>{name}</h3>
          <span>{span}</span>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Slider;
