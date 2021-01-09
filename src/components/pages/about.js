import React, { Component } from "react";
import profilePicture from "../../../static/assets/Images/about-me/christine.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi veritatis
        tenetur quidem saepe error. Earum, repudiandae sint labore deserunt
        sapiente culpa veniam itaque vel, in asperiores sit perferendis natus
        beatae. Ullam quos at sunt neque praesentium corrupti nemo beatae magnam
        ut suscipit dignissimos, dicta delectus eius. Officiis, vel? Delectus at
        reiciendis id odit cum nulla magni omnis velit alias voluptate. Neque
        quasi ullam nihil, sequi aliquam esse voluptatum non eos corrupti
        provident laboriosam et ipsam. Excepturi, vitae sed officia sint
        molestiae, harum fuga quibusdam quam quae neque blanditiis nulla iure.
        Praesentium consequatur odit nulla facere illum porro beatae assumenda
        voluptatum impedit tempora similique repellendus alias odio sint,
        excepturi quae, vel vero dolore veritatis exercitationem inventore quas!
        Tempore vel debitis aliquid! Ullam omnis quod vitae beatae soluta sit
        repudiandae accusamus illo saepe quaerat, ipsam consequuntur dicta id
        corporis quisquam, repellat labore temporibus minus porro quibusdam,
        magnam mollitia maiores? Minus, alias eaque.
      </div>
    </div>
  );
}
