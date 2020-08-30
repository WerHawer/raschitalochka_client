import Loader from "react-loader-spinner";
import React from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default class App extends React.Component {
  render() {
    return <Loader type="ThreeDots" color="#00BFFF" height={10} width={60} />;
  }
}
