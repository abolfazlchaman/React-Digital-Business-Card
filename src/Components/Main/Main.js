import React, { Component } from "react";

//components
import Button from "../Button/Button";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

//styles
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <section className="Main">
        <Header />
        <Button />
        <About />
        <Footer />
      </section>
    );
  }
}
