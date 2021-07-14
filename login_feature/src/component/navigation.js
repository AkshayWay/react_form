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

$(document).on("click", ".nav-item", function (e) {
  $(this).addClass("active").siblings().removeClass("active");
});

class navigation extends Component {
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
        className="navbar navbar-expand-lg navbar-dark bg-primary_change"
        style={{
          marginBottom: "10px",
          backgroundColor: "#563d7c!important",
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            width="50"
            height="50"
            alt="Company_logo"
            style={{ borderRadius: "50%", margin: "5px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
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
              <Link to="/" className="nav-link">
                About us
              </Link>
            </li>
          </ul>
          <ul
            className="nav navbar-nav navbar-right"
            style={{ position: "absolute", right: "10px" }}
          >
            <li>
              <form className="form-inline my-2 my-lg-0">
                <button
                  className="btn btn-outline-light my-2 my-sm-0"
                  type="submit"
                  onClick={() => this.logout()}
                  style={{ display: UserLoggedIn }}
                >
                  {this.state.fname} Log out?
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default navigation;
