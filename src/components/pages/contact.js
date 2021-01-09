import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPicture from "../../../static/assets/Images/contact/women-who-code.png";

export default function () {
  return (
    <div className="contact-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPicture + ")no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>

      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone-square-alt" />
            </div>
            <div className="text">000-000-0000</div>
          </div>
        </div>
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope-square" />
            </div>
            <div className="text">christine.ri.maynard@gmail.com</div>
          </div>
        </div>
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">Brooklyn, NY</div>
          </div>
        </div>
      </div>
    </div>
  );
}
