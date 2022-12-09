import React, { Component } from "react";
// Component
import Photo from "./Components/Photo/Photo";
import Main from "./Components/Main/Main";
// styles
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="BusinessCard">
        <Photo />
        <Main />
      </div>
    );
  }
}
