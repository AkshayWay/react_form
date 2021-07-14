import React, { component, Component } from "react";
import AppCSS from "../App.css";

class footer extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "10px",
          width: "100%",
          height: "50px",
          textAlign: "center",
        }}
        className="bgColor"
      >
        <footer>
          <small>&copy;{new Date().getFullYear()} All rights reserved</small>
        </footer>
      </div>
    );
  }
}

export default footer;
