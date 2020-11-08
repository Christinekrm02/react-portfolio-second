import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  //Data needed:
  //backgound image, logo, description and id for slug
  //background image: thumb_image_url
  //id: id
  //description: description
  const { id, description, thumb_image_url, logo_url } = props.item;
  return (
    <div className="portfolio-item-wrapper">
      <div
        className="portfolio-img-background"
        //inline styles for img layout, style expects an object
        style={{
          backgroundImage: "url(" + thumb_image_url + " )",
        }}
      />
      <div className="img-text-wrapper">
        <div className="logo-wrapper">
          <img src={logo_url} />
        </div>
        <div className="subtitle">{description}</div>
      </div>
    </div>
  );
}
