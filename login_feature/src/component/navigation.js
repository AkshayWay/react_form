import React, { component, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
} from "react-router-dom";
import AppCSS from "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/company_logo.png";
import $ from "jquery";

export default class navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoggedIn: false,
      fname: "",
    };
  }
  componentDidMount() {
    if (
      localStorage.getItem("firstname") != null &&
      localStorage.getItem("isLoggedIn") == 1
    ) {
      this.setState({
        LoggedIn: true,
        fname: localStorage.getItem("firstname"),
      });
    }
  }

  logout() {
    this.setState({
      LoggedIn: false,
    });
    localStorage.clear();
  }

  render() {
    const UserLoggedIn = this.state.LoggedIn ? "inherit" : "none";
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bgColor"
        style={{
          marginBottom: "10px",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <a className="navbar-brand" href="/home">
          <img src={Logo} alt="Company_logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "#76c7d5" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">
                About us
              </Link>
            </li>
          </ul>
          <li className="dropdown nav navbar-nav">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ textDecoration: "none", display: UserLoggedIn }}
            >
              Hi {this.state.fname}
            </a>
            <ul
              className="dropdown-menu"
              style={{ backgroundColor: "#76c7d5" }}
            >
              <li className="nav-item">
                <form>
                  <button
                    type="submit"
                    onClick={() => this.logout()}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    className="btn btn-link btn-logout"
                  >
                    Logout
                  </button>
                </form>
              </li>
            </ul>
          </li>
        </div>
      </nav>
    );
  }
}
