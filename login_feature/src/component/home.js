import React, { component, Component } from "react";
import AppCSS from "../App.css";
import axios from "axios";

export default class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateID: 0,
      stateName: "",
      areaCovered: "",
      capitalCity: "",
      population: "",
      currentNewsData: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://3.9.90.115/public/api/v1/city-list")
      .then((response) => {
        this.setState({
          currentStateData: response,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div style={{ height: "73vh" }}>
        <div className="table-responsive">
          <table
            className="table table-striped"
            style={{ marginTop: 20 }}
            id="stateTbl"
          >
            <thead>
              <tr>
                <th>State Id </th>
                <th>State Name</th>
                <th>Area Covered</th>
                <th>Capital City</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              {this.state.currentStateData == undefined ? (
                <tr>
                  <td colSpan="5">No data found.</td>
                </tr>
              ) : (
                this.state.currentStateData.map((item, idx) => (
                  <tr id={this.state.currentStateData[idx].stateID} key={idx}>
                    <td>{this.state.currentStateData[idx].stateID}</td>
                    <td>{this.state.currentStateData[idx].stateName}</td>
                    <td>{this.state.currentStateData[idx].areaCovered}</td>
                    <td>{this.state.currentStateData[idx].capitalCity}</td>
                    <td>{this.state.currentStateData[idx].population}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
