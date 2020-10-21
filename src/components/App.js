import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handlClick() {
    this.setState({
      display: true
    });
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handlClick}></button>
        {this.state.display && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    );
  }
}

export default App;
