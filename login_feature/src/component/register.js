import React, { component, Component } from "react";
import App from "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory,
} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const formValid = ({ isError, ...rest }) => {
  var isValid = false;
  Object.values(isError).forEach((val) => {
    if (val.length > 0) {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val == "") {
      isValid = false;
    } else {
      isValid = true;
    }
  });
  return isValid;
};
const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
class register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      isError: {
        fname: "",
        lname: "",
        email: "",
        password: "",
      },
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      const obj = {
        first_name: this.state.fname,
        last_name: this.state.lname,
        email: this.state.email,
        password: this.state.password,
      };
      axios
        .post("http://3.9.90.115/public/api/v1/user/register", obj)
        .then((res) => {
          if (res.auth_token) {
            this.props.history.push("/home");
          }
        });
    } else {
      alert("Form is invalid! Please fill all the fields");
    }
  };

  formValChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "fname":
        isError.fname =
          value.length < 4 ? "Atleast 4 characaters required" : "";
        break;
      case "lname":
        isError.lname =
          value.length < 4 ? "Atleast 4 characaters required" : "";
        break;
      case "email":
        isError.email = regExp.test(value) ? "" : "Email address is invalid";
        break;
      case "password":
        isError.password =
          value.length < 6 ? "Atleast 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({
      isError,
      [name]: value,
    });
  };

  render() {
    const { isError } = this.state;

    return (
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-sm"></div>
        <div className="col-sm">
          <form
            onSubmit={this.onSubmit}
            noValidate
            className="rounded-top formClass"
            style={{ backgroundColor: "#d1ecf1", padding: "35px" }}
          >
            <div style={{ textAlign: "center" }}>
              <h3>Register</h3>
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className={
                  isError.fname.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                name="fname"
                onChange={this.formValChange}
              />
              {isError.fname.length > 0 && (
                <span className="invalid-feedback">{isError.fname}</span>
              )}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className={
                  isError.lname.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                name="lname"
                onChange={this.formValChange}
              />
              {isError.lname.length > 0 && (
                <span className="invalid-feedback">{isError.lname}</span>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className={
                  isError.email.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                name="email"
                onChange={this.formValChange}
              />
              {isError.email.length > 0 && (
                <span className="invalid-feedback">{isError.email}</span>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className={
                  isError.password.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
                name="password"
                onChange={this.formValChange}
              />
              {isError.password.length > 0 && (
                <span className="invalid-feedback">{isError.password}</span>
              )}
            </div>

            <button type="submit">Register user</button>
            <label>Already have account? then</label>
            <Link to="/login"> login in</Link>
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    );
  }
}

export default register;
