import React from "react";
import ReactDOM from "react-dom";
import Context from "./Context";
import "./App.css";

import App from "./App.jsx";

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById("root")
);
