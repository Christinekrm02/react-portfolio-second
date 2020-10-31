import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <h3>Looks like you landed on the wrong page</h3>
      <Link to="/">Click here to return to the homepage</Link>
    </div>
  );
}
