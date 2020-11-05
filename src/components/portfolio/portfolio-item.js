import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  //Data needed:
  //backgound image, logo, description and id for slug
  //background image: thumb_image_url
  //id: id
  //description: description
  const { id, description, thumb_image_url, logo } = props.item;
  return (
    <div>
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}
