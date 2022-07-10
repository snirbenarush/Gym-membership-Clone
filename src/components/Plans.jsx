import React from "react";
import "../CSS/Plans.css";

import whiteTick from "../assets/whiteTick.png";

import { plansData } from "../data/plans.Data";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur blur-h1"></div>
      <div className="blur blur-h2"></div>
      <div className="programs-header">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>

      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> ${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>
            <div></div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
