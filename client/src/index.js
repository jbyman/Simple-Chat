import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const ws = new WebSocket("ws://localhost:8765");
ws.onopen = function () {
  console.log("Connected!");
};

ws.onclose = function (e) {
  console.log("Closed.");
  console.log(e);
};

ReactDOM.render(
  <React.StrictMode>
    <App ws={ws} />
  </React.StrictMode>,
  document.getElementById("root")
);
