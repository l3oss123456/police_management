import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import Routes from "./core/routes/index";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Routes />, document.getElementById("root"));

// initial title
// document.title = "Management System";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
