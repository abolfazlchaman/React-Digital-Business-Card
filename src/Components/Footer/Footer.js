import React, { Component } from "react";
import "./Footer.css";
import fb_icon from "../../Images/Facebook.png";
import tw_icon from "../../Images/Twitter.png";
import ig_icon from "../../Images/Instagram.png";
import gi_icon from "../../Images/GitHub.png";
import { IconGenerator } from "../../Functions/Functions";

export default class Footer extends Component {
  render() {
    return (
      <section className="Footer">
        <IconGenerator link="#" src={fb_icon} />
        <IconGenerator link="#" src={tw_icon} />
        <IconGenerator link="#" src={ig_icon} />
        <IconGenerator link="https://github.com/abolfazlchaman/" src={gi_icon} />
      </section>
    );
  }
}

