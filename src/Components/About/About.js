import React, { Component } from "react";
// Functions
import { AboutGenerator } from "../../Functions/Functions";
// Styles
import "./About.css";

export default class Button extends Component {
  render() {
    return (
      <div className="container">
        <AboutGenerator
          heading="About"
          text="I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn."
        />
        <AboutGenerator
          heading="Intrests"
          text="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
        />
      </div>
    );
  }
}
