import React, { Component } from "react";
import Header from "./Header";
import Face from "./Face";

export default class Ex_Layout extends Component {
  render() {
    return (
      <div className="text-center page_home ">
        <div>
          <Header />
        </div>
        <div>
          <Face />
        </div>
      </div>
    );
  }
}
