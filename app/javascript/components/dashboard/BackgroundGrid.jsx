import React from "react";

export default ({ bgImg, bgColor }) => (
  <li className="background-grid-item">
    <button className='background-grid-trigger' style={{ backgroundImage: `url(${bgImg})`, backgroundColor: bgColor }}></button>
  </li>
);
