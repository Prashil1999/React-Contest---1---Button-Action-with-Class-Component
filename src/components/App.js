import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false,
      info: ""
    };
  }
  handlClick() {
    this.setState({
      isDisplay: true,
      info:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    });
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handlClick}></button>
        {this.state.display && <p id="para">{this.state.info}</p>}
      </div>
    );
  }
}

export default App;
