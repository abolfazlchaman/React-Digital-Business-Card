import React, { Component } from "react";

// images
import linkedinicon from "../../Images/linkedin.png";
import emailicon from "../../Images/email.png";

// Functions
import { CustomButton } from "../../Functions/Functions";

// styles
import "./Button.css";

export default class Button extends Component {
  render() {
    return (
      <div>

        <CustomButton
        
          name="Email"
          img={emailicon}
          style="button"
          link="mailto:abolfazlchaman.info@gmail.com">

        </CustomButton>

        <CustomButton

          name="LinkedIn"
          img={linkedinicon}
          style="blue button white"
          link="https://www.linkedin.com/in/abolfazlchaman/">

        </CustomButton>

      </div>
    );
  }
}

