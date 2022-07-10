import React from "react";
import "../CSS/Hero.css";
import Header from "./Header";
import hero_image from "../assets/hero_image2.png";
import hero_image_back from "../assets/hero_image_back2.jpg";
import Heart from "../assets/heart2.png";
import Calories from "../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>the bests fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className="hero-about">
            in here we will help you to shape and build your ideal body and live
            up your life to fullest
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness memberships</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} />
          <span>Heart Rate</span>
          <span> 90 BPM</span>
        </div>
        <img src={hero_image} className="hero-image" />
        <img src={hero_image_back} className="hero-image-back" />
        <div className="calories">
          {/* <img src={Calories} /> */}
          <div className="calories-content">
            <span>
              Total: <br />
              2220 kcal
            </span>
            <hr />
            <span style={{ color: "lightblue" }}>
              Calories Left: <br /> 1230 kcal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
