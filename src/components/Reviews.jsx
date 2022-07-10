import React, { useState } from "react";
import "../CSS/Reviews.css";
import { testimonialsData } from "../data/testData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
const Reviews = () => {
  const [selected, setSelected] = useState(0);
  const reviewLength = testimonialsData.length;
  return (
    <div className="testimonails" id="reviews">
      <div className="left-t">
        <span>Reviews</span>
        <span className="stroke-text">What they</span>
        <span>Say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)", fontWeight: "bold" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() => {
              selected === 0
                ? setSelected(reviewLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() => {
              selected === reviewLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
