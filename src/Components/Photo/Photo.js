import React from "react";
import Picture from "../../Images/abolfazl_chaman.jpg";
import "../Photo/Photo.css";

export default function Photo() {
  return (
    <div className="container">
      <img className="photo" src={Picture} />
    </div>
  );
}
