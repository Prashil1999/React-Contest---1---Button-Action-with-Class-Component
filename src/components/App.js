import React, { Component, useState } from "react";
import "../styles/App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDisplay: false
//     };
//     this.info =
//       "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
//   }
//   handlClick() {
//     this.setState({
//       isDisplay: true
//     });
//   }
//   render() {
//     return (
//       <div id="main">
//         <button id="click" onClick={this.handlClick}></button>
//         {this.state.isDisplay === true ? <p id="para">{this.info}</p> : null}
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPara: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      showPara: true
    });
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.handleClick}></button>
        {this.state.showPara && (
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
