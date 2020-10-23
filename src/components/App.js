import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false
    };
    this.info =
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  }
  handlClick() {
    this.setState({
      isDisplay: true
    });
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handlClick}></button>
        {this.state.isDisplay === true ? <p id="para">{this.info}</p> : null}
      </div>
    );
  }
}

export default App;
