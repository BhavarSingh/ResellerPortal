/*
This is the entrypoint of customer components
like App.js is entry point of whole app
*/

import React, { Component } from "react";
import HomePage from "./Components/HomePage/HomePage";
export default class CustomerApp extends Component {
  render() {
    return (
      <div>
        <HomePage></HomePage>
      </div>
    );
  }
}
