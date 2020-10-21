import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ""
    };
  }
  handlClick = () => {
    this.setState({
      info:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
  };
  render() {
    return (
      <>
        <button id="click" onClick={this.handlClick}>
          click
        </button>
        <p id="para">{this.state.info}</p>
      </>
    );
  }
}

export default App;
