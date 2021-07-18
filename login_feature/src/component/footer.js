import React, { component, Component } from "react";
import AppCSS from "../App.css";

export default class footer extends Component {
  render() {
    return (
      <div className="bgColor footer">
        <footer>
          <small>&copy;{new Date().getFullYear()} All rights reserved</small>
        </footer>
      </div>
    );
  }
}
