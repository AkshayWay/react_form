import React, { component, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      changeEmail: "",
      changePassword: "",
      ErrorMsg: "",
    };
  }

  onSubmit1 = (e) => {
    e.preventDefault();
    if (this.state.email != "") {
      if (this.state.password != "") {
        const obj = {
          email: this.state.email,
          password: this.state.password,
        };
        axios
          .post("http://3.9.90.115/public/api/v1/user/login", obj)
          .then((res) => {
            console.log(res.status);
            if (res.status == 200) {
              localStorage.setItem("firstname", res.data.data.first_name);
              localStorage.setItem("isLoggedIn", 1);
              this.props.history.push("/home");
            } else {
              alert("Wrong credentials");
            }
          });
      } else {
        alert("Please enter password");
      }
    } else {
      alert("Please enter email");
    }
  };
  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  changePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  render() {
    return (
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-sm"></div>
        <div className="col-sm">
          <form
            onSubmit={this.onSubmit1}
            noValidate
            className="rounded-top"
            style={{ backgroundColor: "#d1ecf1", padding: "35px" }}
          >
            <div style={{ textAlign: "center" }}>
              <h3>Login</h3>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.changeEmail}
                required
              />
              <span className="invalid-feedback">{this.state.ErrorMsg}</span>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.changePassword}
                required
              />
            </div>

            <button type="submit">Login</button>
            <label>Create account? then</label>
            <Link to="/register"> register here</Link>
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    );
  }
}
